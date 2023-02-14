
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "district_1": {
            "type": "geojson",
            "data": json_district_1
        }
                    ,
        "Kannur10_2": {
            "type": "geojson",
            "data": json_Kannur10_2
        }
                    ,
        "Kasaragod10_3": {
            "type": "geojson",
            "data": json_Kasaragod10_3
        }
                    ,
        "Wayanad10_4": {
            "type": "geojson",
            "data": json_Wayanad10_4
        }
                    ,
        "Ernakulam_5": {
            "type": "geojson",
            "data": json_Ernakulam_5
        }
                    ,
        "Tvm_6": {
            "type": "geojson",
            "data": json_Tvm_6
        }
                    ,
        "Palakkad_7": {
            "type": "geojson",
            "data": json_Palakkad_7
        }
                    ,
        "Kottayam_8": {
            "type": "geojson",
            "data": json_Kottayam_8
        }
                    ,
        "Kollam_9": {
            "type": "geojson",
            "data": json_Kollam_9
        }
                    ,
        "Pathanamthitta_10": {
            "type": "geojson",
            "data": json_Pathanamthitta_10
        }
                    ,
        "Alappuzha_11": {
            "type": "geojson",
            "data": json_Alappuzha_11
        }
                    ,
        "Idukki_12": {
            "type": "geojson",
            "data": json_Idukki_12
        }
                    ,
        "Malapuram_13": {
            "type": "geojson",
            "data": json_Malapuram_13
        }
                    ,
        "Thrissur_14": {
            "type": "geojson",
            "data": json_Thrissur_14
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_district_1_0",
            "type": "line",
            "source": "district_1",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#232323'}
        }
,
        {
            "id": "lyr_Kannur10_2_0",
            "type": "circle",
            "source": "Kannur10_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#8d5a99', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Kasaragod10_3_0",
            "type": "circle",
            "source": "Kasaragod10_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e5060a', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Wayanad10_4_0",
            "type": "circle",
            "source": "Wayanad10_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e77148', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Ernakulam_5_0",
            "type": "circle",
            "source": "Ernakulam_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#db1e2a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_Tvm_6_0",
            "type": "circle",
            "source": "Tvm_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e5b636', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Palakkad_7_0",
            "type": "circle",
            "source": "Palakkad_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e8718d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Kottayam_8_0",
            "type": "circle",
            "source": "Kottayam_8",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#85b66f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Kollam_9_0",
            "type": "circle",
            "source": "Kollam_9",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Pathanamthitta_10_0",
            "type": "circle",
            "source": "Pathanamthitta_10",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e9b951', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Alappuzha_11_0",
            "type": "circle",
            "source": "Alappuzha_11",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#df26dc', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Idukki_12_0",
            "type": "circle",
            "source": "Idukki_12",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#729b6f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Malapuram_13_0",
            "type": "circle",
            "source": "Malapuram_13",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e5b636', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Thrissur_14_0",
            "type": "circle",
            "source": "Thrissur_14",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#beb297', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}