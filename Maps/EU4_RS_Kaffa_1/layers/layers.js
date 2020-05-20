var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_EU4_Province_1 = new ol.format.GeoJSON();
var features_EU4_Province_1 = format_EU4_Province_1.readFeatures(json_EU4_Province_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EU4_Province_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EU4_Province_1.addFeatures(features_EU4_Province_1);
var lyr_EU4_Province_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EU4_Province_1, 
                style: style_EU4_Province_1,
                interactive: true,
    title: 'EU4_Province<br />\
    <img src="styles/legend/EU4_Province_1_0.png" /> 0<br />\
    <img src="styles/legend/EU4_Province_1_1.png" /> 1<br />'
        });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_EU4_Province_1.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_EU4_Province_1];
lyr_EU4_Province_1.set('fieldAliases', {'FID_': 'FID_', 'Id': 'Id', 'gridcode': 'gridcode', 'PROVID': 'PROVID', 'PROVNAME': 'PROVNAME', 'YML_PROVID': 'YML_PROVID', 'YML_PROV_Q': 'YML_PROV_Q', 'YML_PROVNA': 'YML_PROVNA', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Renan': 'Renan', 'RS_HOLLAND': 'RS_HOLLAND', 'RS_KAFFA': 'RS_KAFFA', });
lyr_EU4_Province_1.set('fieldImages', {'FID_': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'PROVID': 'TextEdit', 'PROVNAME': 'TextEdit', 'YML_PROVID': 'TextEdit', 'YML_PROV_Q': 'TextEdit', 'YML_PROVNA': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Renan': 'Range', 'RS_HOLLAND': 'Range', 'RS_KAFFA': 'Range', });
lyr_EU4_Province_1.set('fieldLabels', {'FID_': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'PROVID': 'no label', 'PROVNAME': 'no label', 'YML_PROVID': 'no label', 'YML_PROV_Q': 'no label', 'YML_PROVNA': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Renan': 'no label', 'RS_HOLLAND': 'no label', 'RS_KAFFA': 'header label', });
lyr_EU4_Province_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});