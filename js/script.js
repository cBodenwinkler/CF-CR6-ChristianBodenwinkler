var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Array to push the data to:
var locationArr = [];
//Class LOCATIONS for the basic Infos about the locations:
var Locations = /** @class */ (function () {
    function Locations(city, zipCode, address, dateTime, img) {
        this.city = "";
        this.zipCode = "";
        this.address = "";
        this.dateTime = "";
        this.img = "";
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.dateTime = dateTime;
        this.img = img;
        locationArr.push(this);
    }
    // Methods Here: (Bootstrap: Horizontal Card Title)
    Locations.prototype.render = function () {
        return "\n        <div class=\"card mb-3 col-11 col-sm-11 col-md-5 col-lg-3\" style=\"max-width: 540px;\">\n            <div class=\"row no-gutters justify-content-center\">\n                <div class=\"col-4 col-sm-4 col-md-6 col-lg-12 m-2\">\n                    <img src=\"" + this.img + "\" class=\"card-img w-100\" alt=\"Image Description\">\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.city + "</h5>\n                        <p class=\"card-text\">Zip Code: " + this.zipCode + "</p>\n                        <p class=\"card-text\">Address: " + this.address + "</p>\n                        <p class=\"card-text\"><small class=\"text-muted\">Visited: " + this.dateTime + "</small></p>\n                    </div>\n                </div>\n            </div>\n        </div>";
    };
    return Locations;
}());
//Class EVENTS
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zipCode, address, dateTime, img, eveDate, eveTime, tktPrice, artist) {
        var _this = _super.call(this, city, zipCode, address, dateTime, img) || this;
        _this.eveDate = "";
        _this.eveTime = "";
        _this.tktPrice = "";
        _this.artist = "";
        _this.eveDate = eveDate;
        _this.eveTime = eveTime;
        _this.tktPrice = tktPrice;
        _this.artist = artist;
        return _this;
    }
    // Methods Here:
    Events.prototype.render = function () {
        return "\n        <div class=\"card mb-3 col-11 col-sm-11 col-md-5 col-lg-3\" style=\"max-width: 540px;\">\n            <div class=\"row no-gutters justify-content-center\">\n                <div class=\"col-4 col-sm-4 col-md-6 col-lg-12 m-2\">\n                    <img src=\"" + this.img + "\" class=\"card-img w-100\" alt=\"Image Description\">\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.artist + "</h5>\n                        <h6 class=\"card-title\">" + this.city + "</h6>\n                        <p class=\"card-text\">Zip Code: " + this.zipCode + "</p>\n                        <p class=\"card-text\">Address: " + this.address + "</p>\n                        <p class=\"card-text\">Event Date: " + this.eveDate + "</p>\n                        <p class=\"card-text\">Event Time: " + this.eveTime + "</p>\n                        <p class=\"card-text\">Ticket Price: " + this.tktPrice + "</p>\n                        <p class=\"card-text\"><small class=\"text-muted\">Visited: " + this.dateTime + "</small></p>\n                    </div>\n                </div>\n            </div>\n        </div>";
    };
    return Events;
}(Locations));
//Class RESTAURANTS
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(city, zipCode, address, dateTime, img, restName, telNum, typeCui, website) {
        var _this = _super.call(this, city, zipCode, address, dateTime, img) || this;
        _this.restName = "";
        _this.telNum = "";
        _this.typeCui = "";
        _this.website = "";
        _this.restName = restName;
        _this.telNum = telNum;
        _this.typeCui = typeCui;
        _this.website = website;
        return _this;
    }
    // Methods Here:
    Restaurants.prototype.render = function () {
        return "\n        <div class=\"card mb-3 col-11 col-sm-11 col-md-5 col-lg-3\" style=\"max-width: 540px;\">\n            <div class=\"row no-gutters justify-content-center\">\n                <div class=\"col-4 col-sm-4 col-md-6 col-lg-12 m-2\">\n                    <img src=\"" + this.img + "\" class=\"card-img w-100\" alt=\"Image Description\">\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.restName + "</h5>\n                        <h6 class=\"card-title\">" + this.city + "</h6>\n                        <p class=\"card-text\">Zip Code: " + this.zipCode + "</p>\n                        <p class=\"card-text\">Address: " + this.address + "</p>\n                        <p class=\"card-text\">Cuisine: " + this.typeCui + "</p>\n                        <p class=\"card-text\">Phone: " + this.telNum + "</p>\n                        <p class=\"card-text\">Website:<a href=\"" + this.website + "\"> " + this.website + "</a></p>\n                        <p class=\"card-text\"><small class=\"text-muted\">Visited: " + this.dateTime + "</small></p>\n                    </div>\n                </div>\n            </div>\n        </div>";
    };
    return Restaurants;
}(Locations));
// LOCATIONS: (city, zipCode, address, dateTime, img)
var location1 = new Locations('Vienna', '1070', 'Museumsplatz 1', '16.10.2020 14:14', 'img/musem.jpg');
var location2 = new Locations('Cape Town', '7100', 'Fritz Sonnenberg Rd. Green Point', '08.07.2014 15:15', 'img/cape.webp');
// EVENTS: (city, zipCode, address, dateTime, img, eveDate, eveTime, tktPrice, artist)
var event1 = new Events('Stadthalle', '1180', 'Neubaugasse 15', '20.09.2020 20:20', 'img/pantera.jpg', '20.09.2020', '20:20', '150€', 'Pantera');
var event2 = new Events('Royal Festival Hall', '11245', 'Leicester Square 23', '20.01.2019 20:20', 'img/royalFestivalHall.jpg', '20.01.2019', '22:00', '100€', 'Bitclic');
//RESTAURANTS: (city, zipCode, address, dateTime, img, restName, telNum, typeCui, website)
var restaurant1 = new Restaurants('London', '11245', '46 Broadwick St', '20.05.2020 20:00', 'img/tapas.webp', 'Tapas Brindisa Soho', '+44 20 7534 1690', 'Spanish/Tapas', 'https://www.brindisakitchens.com/');
var restaurant2 = new Restaurants('Port Elizabeth', '6019', '439a Marine Dr, Summerstrand', '20.05.2014 20:00', 'img/steak.webp', 'De Kelder Restaurant Port Elizabeth', '+27 41 583 2750', 'African', 'https://www.dining-out.co.za/');
// console.table(locationArr);
// Implementing Objects to HTML:
for (var i in locationArr) {
    $('#result').append(locationArr[i].render());
}
