<form action="/search" method="GET">

<label for="start-date">Start Date</label>
<input type="date" name="start-date" id = "start-date"/>
<br />

<label for="end-date">End Date</label>
<input type="date" name="end-date" id="end-date"/>
<br />

<label for="guests">Guests</label>
<input type="number" name="guests" id="guests"/>
<br />

<label for="work">Work Trip</label>
<select name="work" id="work">
<option value="yes">Yes</option>
<option value="no">No</option>
</select>
<br />

<label for="room">Room Type</label>
<select name="room" id="room">
<option value="Entire-home/apt">Entire Place</option>
<option value="Entire-home/apt">Apartment</option>
<option value="Private-room">Private Room</option>
<option value="Shared-room">Shared Room</option>
</select>
<br />

<label for="price-range">Price Range</label>
<div id="price-range">
<label for="min-price" >Starting Price</label>
<input type="number" name="min-price" id="min-price"/>
<br />

<label for="min-price">Max Price</label>
<input type="number" name="max-price" id="max-price"/>
</div>
<br />

<label for="verified">Verified places</label>
<select name="verified" id="verified">
<option value="yes">Yes</option>
<option value="no">No</option>
</select>
<br />

<label for="rooms">Rooms and Beds</label>
<div id="rooms">
<label for="beds">Beds</label>
<input type="number" name="beds" id = "beds"/>

<label for="bedrooms">Bedrooms</label>
<input type="number" name="bedrooms" id = "bedrooms"/>

<label for="bathrooms">Bathrooms</label>
<input type="number" name="bathrooms" id = "bathrooms"/>
</div>
<br />

<label for="instant">Instant Book</label>
<select name="instant" id="instant">
<option value="yes">Yes</option>
<option value="no">No</option>
</select>
<br />

<label for="superhost">Superhost</label>
<select name="superhost" id="superhost">
<option value="yes">Yes</option>
<option value="no">No</option>
</select>
<br />

<label for="amenities">Amenities</label>
<div id="amenities">
<input type="checkbox" name="amenities" value="kitchen" id="kitchen"/> <label for="kitchen">Kitchen</label>
<br />
<input type="checkbox" name="amenities" value="br /eakfast" id="br /eakfast"/> <label for="br /eakfast">br /eakfast</label>
<br />
<input type="checkbox" name="amenities" value="TV" id="TV"/> <label for="TV">TV</label>
<br />
<input type="checkbox" name="amenities" value="air-conditioning" id="air-conditioning"/> <label for="air-conditioning">Air-Conditioning</label>
<br />
</div>
<br />

<label for="Neighbourhoods">Neighbourhoods</label>
<div id="Neighbourhoods">
<input type="checkbox" name="Neighbourhoods" value="Observatoire" id="Observatoire"/> <label for="Observatoire">Observatoire</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Hôtel-de-Ville" id="Hôtel-de-Ville"/> <label for="Hôtel-de-Ville">Hôtel-de-Ville</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Opéra" id="Opéra"/> <label for="Opéra">Opéra</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Ménilmontant" id="Ménilmontant"/> <label for="Ménilmontant">Ménilmontant</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Louvre" id="Louvre"/> <label for="Louvre">Louvre</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Popincourt" id="Popincourt"/> <label for="Popincourt">Popincourt</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Buttes-Montmartre" id="Buttes-Montmartre"/> <label for="Buttes-Montmartre">Buttes-Montmartre</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Élysée" id="Élysée"/> <label for="Élysée">Élysée</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Panthéon" id="Panthéon"/> <label for="Panthéon">Panthéon</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Entrepôt" id="Entrepôt"/> <label for="Entrepôt">Entrepôt</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Buttes-Chaumont" id="Buttes-Chaumont"/> <label for="Buttes-Chaumont">Buttes-Chaumont</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Luxembourg" id="Luxembourg"/> <label for="Luxembourg">Luxembourg</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Palais-Bourbon" id="Palais-Bourbon"/> <label for="Palais-Bourbon">Palais-Bourbon</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Reuilly" id="Reuilly"/> <label for="Reuilly">Reuilly</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Bourse" id="Bourse"/> <label for="Bourse">Bourse</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Vaugirard" id="Vaugirard"/> <label for="Vaugirard">Vaugirard</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Batignolles-Monceau" id="Batignolles-Monceau"/> <label for="Batignolles-Monceau">Batignolles-Monceau</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Passy" id="Passy"/> <label for="Passy">Passy</label>
<br />

<input type="checkbox" name="Neighbourhoods" value="Temple" id="Temple"/> <label for="Temple">Temple</label>
</div>
<br />

<button type="submit">Search</button>
</form>