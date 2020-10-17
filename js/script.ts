//Array to push the data to:
const locationArr:Array<any>=[];

//Class LOCATIONS for the basic Infos about the locations:
class Locations{
    city = "";
    zipCode = "";
    address = "";
    dateTime = "";
    img = "";
    constructor(city, zipCode, address, dateTime, img) {
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.dateTime = dateTime;
        this.img = img;
        locationArr.push(this);
    }
    // Methods Here: (Bootstrap: Horizontal Card Title)
    render() {
        return `
        <div class="card mb-3 col-10 col-sm-10 col-md-5 col-lg-3 col-xl-3 cardManipulate" style="max-width: 350px;">
            <div class="row no-gutters justify-content-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 m-2">
                    <img src="${this.img}" class="card-img w-100 imgStyle" alt="Image Description">
                </div>
                <div class="col-md-12">
                    <div class="card-body">
                        <h5 class="card-title">${this.city}</h5>
                        <hr>
                        <p class="card-text">Zip Code:<br> <em>${this.zipCode}</em></p>
                        <p class="card-text">Address:<br> <em>${this.address}</em></p>
                        <hr>
                            <p class="card-text">
                                <small class="text-muted">Visited: ${this.dateTime}</small>
                            </p>
                    </div>
                </div>
            </div>
        </div>`
    }
}

//Class EVENTS
class Events extends Locations{
    eveDate = "";
    eveTime = "";
    tktPrice = "";
    artist = "";
    constructor(city, zipCode, address, dateTime, img, eveDate, eveTime, tktPrice, artist) {
        super(city, zipCode, address, dateTime, img);
        this.eveDate = eveDate;
        this.eveTime = eveTime;
        this.tktPrice = tktPrice;
        this.artist = artist;
    }
    // Methods Here:
    render() {
        return `
        <div class="card mb-3 col-10 col-sm-10 col-md-5 col-lg-3 col-xl-3 cardManipulate" style="max-width: 350px;">
            <div class="row no-gutters justify-content-around">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 m-2">
                    <img src="${this.img}" class="card-img w-100 imgStyle" alt="Image Description">
                </div>
                <div class="col-md-12">
                    <div class="card-body">
                        <h5 class="card-title">${this.artist}</h5>
                        <h6 class="card-title">${this.city}</h6>
                        <hr>
                        <p class="card-text">Zip Code:<br> <em>${this.zipCode}</em></p>
                        <p class="card-text">Address:<br> <em>${this.address}</em></p>
                        <p class="card-text">Event Date:<br> <em>${this.eveDate}</em></p>
                        <p class="card-text">Event Time:<br> <em>${this.eveTime}</em></p>
                        <p class="card-text">Ticket Price:<br> <em>${this.tktPrice}</em></p>
                        <hr>
                        <p class="card-text"><small class="text-muted">Visited: ${this.dateTime}</small></p>
                    </div>
                </div>
            </div>
        </div>`
    }
}

//Class RESTAURANTS
class Restaurants extends Locations{
    restName = "";
    telNum = "";
    typeCui = "";
    website = "";
    constructor(city, zipCode, address, dateTime, img, restName, telNum, typeCui, website) {
        super(city, zipCode, address, dateTime, img);
        this.restName = restName;
        this.telNum = telNum;
        this.typeCui = typeCui;
        this.website = website;

    }
    // Methods Here:
    render() {
        return `
        <div class="card mb-3 col-10 col-sm-10 col-md-5 col-lg-3 col-xl-3 cardManipulate" style="max-width: 350px;">
            <div class="row no-gutters justify-content-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 m-2">
                    <img src="${this.img}" class="card-img w-100 imgStyle" alt="Image Description">
                </div>
                <div class="col-md-12">
                    <div class="card-body">
                        <h5 class="card-title">${this.restName}</h5>
                        <h6 class="card-title">${this.city}</h6>
                        <hr>
                        <p class="card-text">Zip Code:<br> <em>${this.zipCode}</em></p>
                        <p class="card-text">Address:<br> <em>${this.address}</em></p>
                        <p class="card-text">Cuisine:<br> <em>${this.typeCui}</em></p>
                        <p class="card-text">Phone:<br> ${this.telNum}</p>
                        <p class="card-text">Website:<br> <a href="${this.website}"> ${this.website}</a></p>
                        <hr>
                        <p class="card-text"><small class="text-muted">Visited: ${this.dateTime}</small></p>
                    </div>
                </div>
            </div>
        </div>`
    }
}

// LOCATIONS: (city, zipCode, address, dateTime, img)
let location1 = new Locations('Vienna',
                                '1070',
                                'Museumsplatz 1',
                                '16.10.2020 14:14',
                                'img/musem.jpg');
let location2 = new Locations('Cape Town',
                                '7100',
                                'Fritz Sonnenberg Rd. Green Point',
                                '08.07.2014 15:15',
                                'img/cape.webp' );

// EVENTS: (city, zipCode, address, dateTime, img, eveDate, eveTime, tktPrice, artist)
let event1 = new Events('Stadthalle',
                        '1180',
                        'Neubaugasse 15',
                        '20.09.2020 20:20',
                        'img/pantera.jpg',
                        '20.09.2020',
                        '20:20',
                        '150€',
                        'Pantera');
let event2 = new Events('Royal Festival Hall',
                        '11245',
                        'Leicester Sqr. 23',
                        '20.01.2019 20:20',
                        'img/royalFestivalHall.jpg',
                        '20.01.2019',
                        '22:00',
                        '100€',
                        'Bitclic');

//RESTAURANTS: (city, zipCode, address, dateTime, img, restName, telNum, typeCui, website)
let restaurant1 = new Restaurants('London',
                                    '11245',
                                    '46Broadwick St',
                                    '20.05.2020 20:00',
                                    'img/tapas.webp',
                                    'Tapas Brindisa Soho',
                                    '+44 20 7534 1690',
                                    'Spanish/Tapas',
                                    'https://www.brindisakitchens.com/');
let restaurant2 = new Restaurants('Port Elizabeth',
                                    '6019',
                                    '439a Marine Dr, Summerstrand',
                                    '20.05.2014 20:00',
                                    'img/steak.webp',
                                    'De Kelder',
                                    '+27 41 583 2750',
                                    'African',
                                    'https://www.dining-out.co.za/');

// console.table(locationArr);



// Implementing Objects to HTML:
for (let i in locationArr) {
    
    $('#result').append(locationArr[i].render());
}