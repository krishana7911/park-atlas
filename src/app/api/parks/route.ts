import fs from "fs";
import path from "path";
import Papa from "papaparse";

const filePath = path.join(process.cwd(), "src/data/parks.csv");

let parksData: any[] = [];

// Read CSV using PapaParse
if (fs.existsSync(filePath)) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const parsed = Papa.parse(fileContent, {
    header: true, // Treat first row as headers
    skipEmptyLines: true,
  });

  parksData = parsed.data.map((row: any) => ({
    id: parseInt(row["WDPAID"], 10), // Ensure ID is a number
    name: row["NAME"] || "Unknown",
    location: row["ISO3"] || row["PARENT_ISO3"] || "Unknown", // Fallback for location
    designation: row["DESIG"] || "Not Reported",
    type: row["DESIG_TYPE"] || "N/A", // 'DESIG_TYPE' better reflects the category
    area: parseFloat(row["GIS_AREA"]) || parseFloat(row["REP_AREA"]) || 0, // Use GIS_AREA first
    marine: row["MARINE"] === "1",
    ownership: row["OWN_TYPE"] || "Unknown",
    managingAuthority: row["MANG_AUTH"] || "Unknown",
    status: row["STATUS"] || "Unknown",
    designationYear: row["STATUS_YR"] ? parseInt(row["STATUS_YR"], 10) : "N/A",
  }));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const pageSize = Math.max(1, parseInt(searchParams.get("pageSize") || "10"));
  const filter = searchParams.get("filter")?.toLowerCase() || "";

  let filteredData = parksData;

  // Apply filters
  if (filter) {
    filteredData = filteredData.filter(
      (park) =>
        park.name.toLowerCase().includes(filter) ||
        park.designation.toLowerCase().includes(filter) ||
        park.type.toLowerCase().includes(filter)
    );
  }

  // Pagination
  const total = filteredData.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  return Response.json({
    data: paginatedData,
    page,
    pageSize,
    total,
    totalPages,
  });
}
