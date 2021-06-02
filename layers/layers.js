var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var lyr_naklon_buf300_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "naklon_buf300",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/naklon_buf300_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1491678.586474, 5688153.566311, 1840991.518695, 5922946.454397]
                            })
                        });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_naklon_buf300_1.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_naklon_buf300_1];
