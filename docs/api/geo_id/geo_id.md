# geo_id

> Geographic identifications

## Data
YML representation of their meaning
```yaml
8741: "Iberian Peninsula"
8742: "Canary Islands"
8743: "Baleares"
8744: "Ceuta"
8745: "Melilla"
```

JSON representation available at [geo_id/geo_id.json](geo_id.json)

## Source
When using ``PricePVPC2-0TD`` one of the objects sent is the ``geos`` object, an array with 5 geographic zones with its
IDs and pseudonyms.
Raw response:
```json
{
  "geos": [
    { "geo_id": 8741, "geo_name": "Península" },
    { "geo_id": 8742, "geo_name": "Canarias" },
    { "geo_id": 8743, "geo_name": "Baleares" },
    { "geo_id": 8744, "geo_name": "Ceuta" },
    { "geo_id": 8745, "geo_name": "Melilla" }
  ]
}
```
