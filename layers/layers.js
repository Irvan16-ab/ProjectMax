var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PENDIDIKAN_PT_50K_1 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_1 = format_PENDIDIKAN_PT_50K_1.readFeatures(json_PENDIDIKAN_PT_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_1.addFeatures(features_PENDIDIKAN_PT_50K_1);
var lyr_PENDIDIKAN_PT_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_50K_1, 
                style: style_PENDIDIKAN_PT_50K_1,
                popuplayertitle: 'PENDIDIKAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_1.png" /> PENDIDIKAN_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PENDIDIKAN_PT_50K_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PENDIDIKAN_PT_50K_1];
lyr_PENDIDIKAN_PT_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_PENDIDIKAN_PT_50K_1.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_PENDIDIKAN_PT_50K_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'JJGPDF': 'inline label - always visible', 'JNSPDL': 'inline label - always visible', });
lyr_PENDIDIKAN_PT_50K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});