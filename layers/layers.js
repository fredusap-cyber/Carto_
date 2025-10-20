var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lim_adm_quartier_mtp_1 = new ol.format.GeoJSON();
var features_lim_adm_quartier_mtp_1 = format_lim_adm_quartier_mtp_1.readFeatures(json_lim_adm_quartier_mtp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lim_adm_quartier_mtp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lim_adm_quartier_mtp_1.addFeatures(features_lim_adm_quartier_mtp_1);
var lyr_lim_adm_quartier_mtp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lim_adm_quartier_mtp_1, 
                style: style_lim_adm_quartier_mtp_1,
                popuplayertitle: 'lim_adm_quartier_mtp',
                interactive: true,
                title: '<img src="styles/legend/lim_adm_quartier_mtp_1.png" /> lim_adm_quartier_mtp'
            });
var format_masque_mtp_2 = new ol.format.GeoJSON();
var features_masque_mtp_2 = format_masque_mtp_2.readFeatures(json_masque_mtp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masque_mtp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masque_mtp_2.addFeatures(features_masque_mtp_2);
var lyr_masque_mtp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masque_mtp_2, 
                style: style_masque_mtp_2,
                popuplayertitle: 'masque_mtp',
                interactive: true,
                title: '<img src="styles/legend/masque_mtp_2.png" /> masque_mtp'
            });
var format_Primtreampiceriearrete_epicerie_de_nuit_3 = new ol.format.GeoJSON();
var features_Primtreampiceriearrete_epicerie_de_nuit_3 = format_Primtreampiceriearrete_epicerie_de_nuit_3.readFeatures(json_Primtreampiceriearrete_epicerie_de_nuit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Primtreampiceriearrete_epicerie_de_nuit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Primtreampiceriearrete_epicerie_de_nuit_3.addFeatures(features_Primtreampiceriearrete_epicerie_de_nuit_3);
var lyr_Primtreampiceriearrete_epicerie_de_nuit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Primtreampiceriearrete_epicerie_de_nuit_3, 
                style: style_Primtreampiceriearrete_epicerie_de_nuit_3,
                popuplayertitle: 'Périmètre am épicerie — arrete_epicerie_de_nuit',
                interactive: true,
                title: '<img src="styles/legend/Primtreampiceriearrete_epicerie_de_nuit_3.png" /> Périmètre am épicerie — arrete_epicerie_de_nuit'
            });
var format_VerbalisationERPNuitERP2025geocoded2_4 = new ol.format.GeoJSON();
var features_VerbalisationERPNuitERP2025geocoded2_4 = format_VerbalisationERPNuitERP2025geocoded2_4.readFeatures(json_VerbalisationERPNuitERP2025geocoded2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VerbalisationERPNuitERP2025geocoded2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VerbalisationERPNuitERP2025geocoded2_4.addFeatures(features_VerbalisationERPNuitERP2025geocoded2_4);
var lyr_VerbalisationERPNuitERP2025geocoded2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VerbalisationERPNuitERP2025geocoded2_4, 
                style: style_VerbalisationERPNuitERP2025geocoded2_4,
                popuplayertitle: 'Verbalisation ERP - Nuit(ERP 2025).geocoded (2)',
                interactive: true,
                title: '<img src="styles/legend/VerbalisationERPNuitERP2025geocoded2_4.png" /> Verbalisation ERP - Nuit(ERP 2025).geocoded (2)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_lim_adm_quartier_mtp_1.setVisible(true);lyr_masque_mtp_2.setVisible(true);lyr_Primtreampiceriearrete_epicerie_de_nuit_3.setVisible(true);lyr_VerbalisationERPNuitERP2025geocoded2_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_lim_adm_quartier_mtp_1,lyr_masque_mtp_2,lyr_Primtreampiceriearrete_epicerie_de_nuit_3,lyr_VerbalisationERPNuitERP2025geocoded2_4];
lyr_lim_adm_quartier_mtp_1.set('fieldAliases', {'objectid': 'objectid', 'name': 'name', 'gdb_geomattr_data': 'gdb_geomattr_data', });
lyr_masque_mtp_2.set('fieldAliases', {'objectid': 'objectid', 'gdb_geomattr_data': 'gdb_geomattr_data', });
lyr_Primtreampiceriearrete_epicerie_de_nuit_3.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'objectid': 'objectid', 'annee': 'annee', 'secteur': 'secteur', 'commentaire': 'commentaire', 'type': 'type', 'gdb_geomattr_data': 'gdb_geomattr_data', });
lyr_VerbalisationERPNuitERP2025geocoded2_4.set('fieldAliases', {'Adresse ERP': 'Adresse ERP', 'Commune': 'Commune', 'X': 'X', 'Y': 'Y', 'longitude': 'longitude', 'latitude': 'latitude', 'result_score': 'result_score', 'result_score_next': 'result_score_next', 'result_label': 'result_label', 'result_housenumber': 'result_housenumber', 'result_name': 'result_name', 'result_street': 'result_street', 'result_postcode': 'result_postcode', 'result_city': 'result_city', 'result_context': 'result_context', 'result_citycode': 'result_citycode', 'result_oldcitycode': 'result_oldcitycode', 'result_oldcity': 'result_oldcity', 'result_district': 'result_district', 'result_status': 'result_status', });
lyr_lim_adm_quartier_mtp_1.set('fieldImages', {'objectid': 'TextEdit', 'name': 'TextEdit', 'gdb_geomattr_data': 'Binary', });
lyr_masque_mtp_2.set('fieldImages', {'objectid': 'TextEdit', 'gdb_geomattr_data': 'Binary', });
lyr_Primtreampiceriearrete_epicerie_de_nuit_3.set('fieldImages', {'fid': 'TextEdit', 'gid': 'Range', 'objectid': 'Range', 'annee': 'Range', 'secteur': 'TextEdit', 'commentaire': 'TextEdit', 'type': 'TextEdit', 'gdb_geomattr_data': 'Binary', });
lyr_VerbalisationERPNuitERP2025geocoded2_4.set('fieldImages', {'Adresse ERP': 'TextEdit', 'Commune': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'result_score': 'TextEdit', 'result_score_next': 'TextEdit', 'result_label': 'TextEdit', 'result_housenumber': 'TextEdit', 'result_name': 'TextEdit', 'result_street': 'TextEdit', 'result_postcode': 'Range', 'result_city': 'TextEdit', 'result_context': 'TextEdit', 'result_citycode': 'Range', 'result_oldcitycode': 'TextEdit', 'result_oldcity': 'TextEdit', 'result_district': 'TextEdit', 'result_status': 'TextEdit', });
lyr_lim_adm_quartier_mtp_1.set('fieldLabels', {'objectid': 'no label', 'name': 'no label', 'gdb_geomattr_data': 'no label', });
lyr_masque_mtp_2.set('fieldLabels', {'objectid': 'no label', 'gdb_geomattr_data': 'no label', });
lyr_Primtreampiceriearrete_epicerie_de_nuit_3.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'objectid': 'no label', 'annee': 'no label', 'secteur': 'no label', 'commentaire': 'no label', 'type': 'no label', 'gdb_geomattr_data': 'no label', });
lyr_VerbalisationERPNuitERP2025geocoded2_4.set('fieldLabels', {'Adresse ERP': 'no label', 'Commune': 'no label', 'X': 'no label', 'Y': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'result_score': 'no label', 'result_score_next': 'no label', 'result_label': 'no label', 'result_housenumber': 'no label', 'result_name': 'no label', 'result_street': 'no label', 'result_postcode': 'no label', 'result_city': 'no label', 'result_context': 'no label', 'result_citycode': 'no label', 'result_oldcitycode': 'no label', 'result_oldcity': 'no label', 'result_district': 'no label', 'result_status': 'no label', });
lyr_VerbalisationERPNuitERP2025geocoded2_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});