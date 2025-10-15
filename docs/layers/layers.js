var wms_layers = [];


        var lyr_WorldStreetMap_0 = new ol.layer.Tile({
            'title': 'World Street Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DeepShelf150400m_1 = new ol.format.GeoJSON();
var features_DeepShelf150400m_1 = format_DeepShelf150400m_1.readFeatures(json_DeepShelf150400m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeepShelf150400m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeepShelf150400m_1.addFeatures(features_DeepShelf150400m_1);
var lyr_DeepShelf150400m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeepShelf150400m_1, 
                style: style_DeepShelf150400m_1,
                popuplayertitle: 'Deep Shelf (150-400m)',
                interactive: false,
                title: '<img src="styles/legend/DeepShelf150400m_1.png" /> Deep Shelf (150-400m)'
            });
var format_MidShelf50150m_2 = new ol.format.GeoJSON();
var features_MidShelf50150m_2 = format_MidShelf50150m_2.readFeatures(json_MidShelf50150m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MidShelf50150m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MidShelf50150m_2.addFeatures(features_MidShelf50150m_2);
var lyr_MidShelf50150m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MidShelf50150m_2, 
                style: style_MidShelf50150m_2,
                popuplayertitle: 'Mid Shelf (50-150m)',
                interactive: false,
                title: '<img src="styles/legend/MidShelf50150m_2.png" /> Mid Shelf (50-150m)'
            });
var format_NearShelf050m_3 = new ol.format.GeoJSON();
var features_NearShelf050m_3 = format_NearShelf050m_3.readFeatures(json_NearShelf050m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NearShelf050m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NearShelf050m_3.addFeatures(features_NearShelf050m_3);
var lyr_NearShelf050m_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NearShelf050m_3, 
                style: style_NearShelf050m_3,
                popuplayertitle: 'Near Shelf (0-50m)',
                interactive: false,
                title: '<img src="styles/legend/NearShelf050m_3.png" /> Near Shelf (0-50m)'
            });
var format_AustralianMarineParks_4 = new ol.format.GeoJSON();
var features_AustralianMarineParks_4 = format_AustralianMarineParks_4.readFeatures(json_AustralianMarineParks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AustralianMarineParks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AustralianMarineParks_4.addFeatures(features_AustralianMarineParks_4);
var lyr_AustralianMarineParks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AustralianMarineParks_4, 
                style: style_AustralianMarineParks_4,
                popuplayertitle: 'Australian Marine Parks',
                interactive: false,
                title: '<img src="styles/legend/AustralianMarineParks_4.png" /> Australian Marine Parks'
            });
var format_ExistingGasPipelines_5 = new ol.format.GeoJSON();
var features_ExistingGasPipelines_5 = format_ExistingGasPipelines_5.readFeatures(json_ExistingGasPipelines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingGasPipelines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingGasPipelines_5.addFeatures(features_ExistingGasPipelines_5);
var lyr_ExistingGasPipelines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingGasPipelines_5, 
                style: style_ExistingGasPipelines_5,
                popuplayertitle: 'Existing Gas Pipelines',
                interactive: true,
    title: 'Existing Gas Pipelines<br />\
    <img src="styles/legend/ExistingGasPipelines_5_0.png" /> Deep Shelf (150-400m)<br />\
    <img src="styles/legend/ExistingGasPipelines_5_1.png" /> Mid Shelf (50-150m)<br />\
    <img src="styles/legend/ExistingGasPipelines_5_2.png" /> Near Shelf (0-50m)<br />' });
var format_ProposedGasPipelines_6 = new ol.format.GeoJSON();
var features_ProposedGasPipelines_6 = format_ProposedGasPipelines_6.readFeatures(json_ProposedGasPipelines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedGasPipelines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedGasPipelines_6.addFeatures(features_ProposedGasPipelines_6);
var lyr_ProposedGasPipelines_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProposedGasPipelines_6, 
                style: style_ProposedGasPipelines_6,
                popuplayertitle: 'Proposed Gas Pipelines',
                interactive: true,
    title: 'Proposed Gas Pipelines<br />\
    <img src="styles/legend/ProposedGasPipelines_6_0.png" /> Deep Shelf (150-500m)<br />\
    <img src="styles/legend/ProposedGasPipelines_6_1.png" /> Mid Shelf (150-500m)<br />\
    <img src="styles/legend/ProposedGasPipelines_6_2.png" /> Near Shelf (150-500m)<br />' });
var format_ExistingOilPipelines_7 = new ol.format.GeoJSON();
var features_ExistingOilPipelines_7 = format_ExistingOilPipelines_7.readFeatures(json_ExistingOilPipelines_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingOilPipelines_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingOilPipelines_7.addFeatures(features_ExistingOilPipelines_7);
var lyr_ExistingOilPipelines_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingOilPipelines_7, 
                style: style_ExistingOilPipelines_7,
                popuplayertitle: 'Existing Oil Pipelines',
                interactive: false,
                title: '<img src="styles/legend/ExistingOilPipelines_7.png" /> Existing Oil Pipelines'
            });
var group_Pipelines = new ol.layer.Group({
                                layers: [lyr_ExistingGasPipelines_5,lyr_ProposedGasPipelines_6,lyr_ExistingOilPipelines_7,],
                                fold: 'close',
                                title: 'Pipelines'});
var group_Zones = new ol.layer.Group({
                                layers: [lyr_DeepShelf150400m_1,lyr_MidShelf50150m_2,lyr_NearShelf050m_3,],
                                fold: 'close',
                                title: 'Zones'});

lyr_WorldStreetMap_0.setVisible(true);lyr_DeepShelf150400m_1.setVisible(true);lyr_MidShelf50150m_2.setVisible(true);lyr_NearShelf050m_3.setVisible(true);lyr_AustralianMarineParks_4.setVisible(true);lyr_ExistingGasPipelines_5.setVisible(true);lyr_ProposedGasPipelines_6.setVisible(true);lyr_ExistingOilPipelines_7.setVisible(true);
var layersList = [lyr_WorldStreetMap_0,group_Zones,lyr_AustralianMarineParks_4,group_Pipelines];
lyr_DeepShelf150400m_1.set('fieldAliases', {'fid': 'fid', 'Contour': 'Contour', 'Zone': 'Zone', });
lyr_MidShelf50150m_2.set('fieldAliases', {'fid': 'fid', 'Contour': 'Contour', 'Zone': 'Zone', });
lyr_NearShelf050m_3.set('fieldAliases', {'fid': 'fid', 'Contour': 'Contour', 'Zone': 'Zone', });
lyr_AustralianMarineParks_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NETNAME': 'NETNAME', 'RESNAME': 'RESNAME', 'ZONENAME': 'ZONENAME', 'ZONEIUCN': 'ZONEIUCN', 'POLYGONID': 'POLYGONID', 'NATLEGEND': 'NATLEGEND', 'AREA_KM2': 'AREA_KM2', 'SHAPEAREA': 'SHAPEAREA', 'SHAPELEN': 'SHAPELEN', });
lyr_ExistingGasPipelines_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FEATURE_TYPE': 'FEATURE_TYPE', 'NAME': 'NAME', 'STATE': 'STATE', 'OPERATIONAL_STATUS': 'OPERATIONAL_STATUS', 'DATE_DOWNLOADED': 'DATE_DOWNLOADED', 'SOURCE': 'SOURCE', 'LICENSE': 'LICENSE', 'SPATIAL_CONFIDENCE': 'SPATIAL_CONFIDENCE', 'SHAPE_Length': 'SHAPE_Length', 'Zone': 'Zone', 'Length (km)': 'Length (km)', 'Reccomendation': 'Reccomendation', 'Type': 'Type', });
lyr_ProposedGasPipelines_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FEATURE_TYPE': 'FEATURE_TYPE', 'NAME': 'NAME', 'LENGTH': 'LENGTH', 'STATE': 'STATE', 'OPERATIONAL_STATUS': 'OPERATIONAL_STATUS', 'DATE_DOWNLOADED': 'DATE_DOWNLOADED', 'SOURCE': 'SOURCE', 'LICENSE': 'LICENSE', 'SPATIAL_CONFIDENCE': 'SPATIAL_CONFIDENCE', 'SHAPE_Length': 'SHAPE_Length', 'Zone': 'Zone', 'Length (km)': 'Length (km)', 'Reccomendation': 'Reccomendation', 'Type': 'Type', });
lyr_ExistingOilPipelines_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FEATURE_TYPE': 'FEATURE_TYPE', 'NAME': 'NAME', 'LENGTH': 'LENGTH', 'STATE': 'STATE', 'OPERATIONAL_STATUS': 'OPERATIONAL_STATUS', 'DATE_DOWNLOADED': 'DATE_DOWNLOADED', 'SOURCE': 'SOURCE', 'LICENSE': 'LICENSE', 'SPATIAL_CONFIDENCE': 'SPATIAL_CONFIDENCE', 'SHAPE_Length': 'SHAPE_Length', });
lyr_DeepShelf150400m_1.set('fieldImages', {'fid': 'TextEdit', 'Contour': 'Range', 'Zone': 'TextEdit', });
lyr_MidShelf50150m_2.set('fieldImages', {'fid': 'TextEdit', 'Contour': 'Range', 'Zone': 'TextEdit', });
lyr_NearShelf050m_3.set('fieldImages', {'fid': 'TextEdit', 'Contour': 'Range', 'Zone': 'TextEdit', });
lyr_AustralianMarineParks_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'NETNAME': 'TextEdit', 'RESNAME': 'TextEdit', 'ZONENAME': 'TextEdit', 'ZONEIUCN': 'TextEdit', 'POLYGONID': 'TextEdit', 'NATLEGEND': 'TextEdit', 'AREA_KM2': 'TextEdit', 'SHAPEAREA': 'TextEdit', 'SHAPELEN': 'TextEdit', });
lyr_ExistingGasPipelines_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FEATURE_TYPE': 'TextEdit', 'NAME': 'TextEdit', 'STATE': 'TextEdit', 'OPERATIONAL_STATUS': 'TextEdit', 'DATE_DOWNLOADED': 'TextEdit', 'SOURCE': 'TextEdit', 'LICENSE': 'TextEdit', 'SPATIAL_CONFIDENCE': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'Zone': 'TextEdit', 'Length (km)': 'TextEdit', 'Reccomendation': 'TextEdit', 'Type': 'TextEdit', });
lyr_ProposedGasPipelines_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FEATURE_TYPE': 'TextEdit', 'NAME': 'TextEdit', 'LENGTH': 'TextEdit', 'STATE': 'TextEdit', 'OPERATIONAL_STATUS': 'TextEdit', 'DATE_DOWNLOADED': 'TextEdit', 'SOURCE': 'TextEdit', 'LICENSE': 'TextEdit', 'SPATIAL_CONFIDENCE': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'Zone': 'TextEdit', 'Length (km)': 'TextEdit', 'Reccomendation': 'TextEdit', 'Type': 'TextEdit', });
lyr_ExistingOilPipelines_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'FEATURE_TYPE': 'TextEdit', 'NAME': 'TextEdit', 'LENGTH': 'TextEdit', 'STATE': 'TextEdit', 'OPERATIONAL_STATUS': 'TextEdit', 'DATE_DOWNLOADED': 'TextEdit', 'SOURCE': 'TextEdit', 'LICENSE': 'TextEdit', 'SPATIAL_CONFIDENCE': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_DeepShelf150400m_1.set('fieldLabels', {'fid': 'hidden field', 'Contour': 'hidden field', 'Zone': 'header label - always visible', });
lyr_MidShelf50150m_2.set('fieldLabels', {'fid': 'hidden field', 'Contour': 'hidden field', 'Zone': 'hidden field', });
lyr_NearShelf050m_3.set('fieldLabels', {'fid': 'hidden field', 'Contour': 'hidden field', 'Zone': 'hidden field', });
lyr_AustralianMarineParks_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'no label', 'NETNAME': 'no label', 'RESNAME': 'no label', 'ZONENAME': 'no label', 'ZONEIUCN': 'no label', 'POLYGONID': 'no label', 'NATLEGEND': 'no label', 'AREA_KM2': 'no label', 'SHAPEAREA': 'no label', 'SHAPELEN': 'no label', });
lyr_ExistingGasPipelines_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FEATURE_TYPE': 'hidden field', 'NAME': 'inline label - always visible', 'STATE': 'hidden field', 'OPERATIONAL_STATUS': 'hidden field', 'DATE_DOWNLOADED': 'hidden field', 'SOURCE': 'hidden field', 'LICENSE': 'hidden field', 'SPATIAL_CONFIDENCE': 'hidden field', 'SHAPE_Length': 'hidden field', 'Zone': 'inline label - always visible', 'Length (km)': 'inline label - visible with data', 'Reccomendation': 'inline label - always visible', 'Type': 'inline label - visible with data', });
lyr_ProposedGasPipelines_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'FEATURE_TYPE': 'hidden field', 'NAME': 'inline label - always visible', 'LENGTH': 'hidden field', 'STATE': 'hidden field', 'OPERATIONAL_STATUS': 'hidden field', 'DATE_DOWNLOADED': 'hidden field', 'SOURCE': 'hidden field', 'LICENSE': 'hidden field', 'SPATIAL_CONFIDENCE': 'hidden field', 'SHAPE_Length': 'hidden field', 'Zone': 'inline label - always visible', 'Length (km)': 'inline label - always visible', 'Reccomendation': 'inline label - always visible', 'Type': 'inline label - always visible', });
lyr_ExistingOilPipelines_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'FEATURE_TYPE': 'hidden field', 'NAME': 'hidden field', 'LENGTH': 'hidden field', 'STATE': 'hidden field', 'OPERATIONAL_STATUS': 'hidden field', 'DATE_DOWNLOADED': 'hidden field', 'SOURCE': 'hidden field', 'LICENSE': 'hidden field', 'SPATIAL_CONFIDENCE': 'hidden field', 'SHAPE_Length': 'hidden field', });
lyr_ExistingOilPipelines_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});