var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1 = new ol.format.GeoJSON();
var features_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1 = format_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1.readFeatures(json_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1.addFeatures(features_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1);var lyr_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1, 
                style: style_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1,
                title: '<img src="styles/legend/SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1.png" /> SADC_Protected_Areas_Detailed_20250903_-2536735709925665484'
            });var format_SADC_TFCA_Boundaries_20250903_2 = new ol.format.GeoJSON();
var features_SADC_TFCA_Boundaries_20250903_2 = format_SADC_TFCA_Boundaries_20250903_2.readFeatures(json_SADC_TFCA_Boundaries_20250903_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SADC_TFCA_Boundaries_20250903_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SADC_TFCA_Boundaries_20250903_2.addFeatures(features_SADC_TFCA_Boundaries_20250903_2);var lyr_SADC_TFCA_Boundaries_20250903_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SADC_TFCA_Boundaries_20250903_2, 
                style: style_SADC_TFCA_Boundaries_20250903_2,
                title: '<img src="styles/legend/SADC_TFCA_Boundaries_20250903_2.png" /> SADC_TFCA_Boundaries_20250903'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1.setVisible(true);lyr_SADC_TFCA_Boundaries_20250903_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1,lyr_SADC_TFCA_Boundaries_20250903_2];
lyr_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1.set('fieldAliases', {'id': 'id', 'FID': 'FID', 'Name': 'Name', 'Designatio': 'Designatio', 'IUCN': 'IUCN', 'Country': 'Country', 'Size_ha': 'Size_ha', 'Area_km2': 'Area_km2', 'Source': 'Source', 'name_gis': 'name_gis', 'TFCA': 'TFCA', 'GlobalID': 'GlobalID', 'Permimeter': 'Permimeter', 'Shape_Leng': 'Shape_Leng', });
lyr_SADC_TFCA_Boundaries_20250903_2.set('fieldAliases', {'id': 'id', 'abbr': 'abbr', 'tfca': 'tfca', 'tfca2': 'tfca2', 'status': 'status', 'treatystat': 'treatystat', 'name_gis': 'name_gis', 'globalid': 'globalid', 'area_km2': 'area_km2', 'area_ha': 'area_ha', 'sadc_class': 'sadc_class', 'agreements': 'agreements', 'agreemen_1': 'agreemen_1', 'sadc_statu': 'sadc_statu', 'sadc_progr': 'sadc_progr', 'notes': 'notes', 'sadc_tfcal': 'sadc_tfcal', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'globalid_2': 'globalid_2', });
lyr_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1.set('fieldImages', {'id': '', 'FID': '', 'Name': '', 'Designatio': '', 'IUCN': '', 'Country': '', 'Size_ha': '', 'Area_km2': '', 'Source': '', 'name_gis': '', 'TFCA': '', 'GlobalID': '', 'Permimeter': '', 'Shape_Leng': '', });
lyr_SADC_TFCA_Boundaries_20250903_2.set('fieldImages', {'id': '', 'abbr': '', 'tfca': '', 'tfca2': '', 'status': '', 'treatystat': '', 'name_gis': '', 'globalid': '', 'area_km2': '', 'area_ha': '', 'sadc_class': '', 'agreements': '', 'agreemen_1': '', 'sadc_statu': '', 'sadc_progr': '', 'notes': '', 'sadc_tfcal': '', 'shape_leng': '', 'shape_area': '', 'globalid_2': '', });
lyr_SADC_Protected_Areas_Detailed_20250903_2536735709925665484_1.set('fieldLabels', {'id': 'no label', 'FID': 'no label', 'Name': 'header label', 'Designatio': 'header label', 'IUCN': 'no label', 'Country': 'header label', 'Size_ha': 'inline label', 'Area_km2': 'inline label', 'Source': 'no label', 'name_gis': 'no label', 'TFCA': 'no label', 'GlobalID': 'no label', 'Permimeter': 'no label', 'Shape_Leng': 'no label', });
lyr_SADC_TFCA_Boundaries_20250903_2.set('fieldLabels', {'id': 'no label', 'abbr': 'no label', 'tfca': 'no label', 'tfca2': 'no label', 'status': 'no label', 'treatystat': 'no label', 'name_gis': 'no label', 'globalid': 'header label', 'area_km2': 'inline label', 'area_ha': 'no label', 'sadc_class': 'header label', 'agreements': 'inline label', 'agreemen_1': 'no label', 'sadc_statu': 'no label', 'sadc_progr': 'no label', 'notes': 'no label', 'sadc_tfcal': 'header label', 'shape_leng': 'inline label', 'shape_area': 'inline label', 'globalid_2': 'no label', });
lyr_SADC_TFCA_Boundaries_20250903_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});