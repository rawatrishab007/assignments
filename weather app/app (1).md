## Weather App

# Need data -\> API

# Data in a particular format (JSON)

`json`

{
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.5171,
        "lon": -0.1062,
        "tz_id": "Europe/London",
        "localtime_epoch": 1770092668,
        "localtime": "2026-02-03 04:24"
    },
    "current": {
        "last_updated_epoch": 1770092100,
        "last_updated": "2026-02-03 04:15",
        "temp_c": 6.4,
        "temp_f": 43.5,
        "is_day": 0,
        "condition": {
            "text": "Light rain",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/296.png",
            "code": 1183
        },
        "wind_mph": 15.0,
        "wind_kph": 24.1,
        "wind_degree": 83,
        "wind_dir": "E",
        "pressure_mb": 992.0,
        "pressure_in": 29.29,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 87,
        "cloud": 100,
        "feelslike_c": 2.4,
        "feelslike_f": 36.3,
        "windchill_c": 1.8,
        "windchill_f": 35.3,
        "heatindex_c": 6.0,
        "heatindex_f": 42.7,
        "dewpoint_c": 3.4,
        "dewpoint_f": 38.2,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 0.0,
        "gust_mph": 20.9,
        "gust_kph": 33.6,
        "air_quality": {
            "co": 197.85,
            "no2": 17.45,
            "o3": 38.0,
            "so2": 2.25,
            "pm2_5": 9.65,
            "pm10": 11.55,
            "us-epa-index": 1,
            "gb-defra-index": 1
        },
        "short_rad": 0,
        "diff_rad": 0,
        "dni": 0,
        "gti": 0
    }
}

## Requirements -

# API (Data source) -\>

http://api.weatherapi.com/v1/current.json?key=0166abf3dd3341e1be542105260302&q=London&aqi=yes
# Flow -\>

# Dummy UI

1.with dummy data. \[DONE\] 2.call API get actual data. \[IN-PROGRESS\]
3.DOM update \[TO-DO\]
