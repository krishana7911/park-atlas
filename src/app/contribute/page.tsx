export default function Contribute() {
    return (
      <div>
        <h1>Contribute to ParkAtlas</h1>
        <p>Help us improve ParkAtlas by contributing information, reporting sightings, and providing recommendations.</p>
        <form>
          <label htmlFor="sighting">Report a Sighting:</label>
          <input type="text" id="sighting" name="sighting" placeholder="Describe the sighting..." />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
