require([
    "esri/geometry/Extent",
    "esri/map",
    

    "esri/layers/FeatureLayer",

    "esri/tasks/Geoprocessor",
    "esri/tasks/FeatureSet",
    "esri/graphic",
    "esri/tasks/query",

    "dojo/on",
    "dojo/dom",

    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol"

    ],function(
        Extent,
        Map,
        FeatureLayer,

        Geoprocessor,
        FeatureSet,
        Graphic,
        Query,
        

        on,
        dom,
        SimpleMarkerSymbol,
        SimpleLineSymbol,
        SimpleFillSymbol
    ){
        var mapMain = new Map('mapa',{
            basemap: 'streets',
            zoom: 12,
            center: [-3.689674,40.420456],
            
        });
        

        //var madridExtnt= new Extent({
           // xmin: -439839.89788094047,
           // ymin: 4914519.787984802,
           // xmax: -381136.26015800424,
           // ymax: 4939896.881375446,
            //spatialReference: {
               //wkid: 102100
           // }         
        //});

        var hospitals = new FeatureLayer("https://services5.arcgis.com/zZdalPw2d0tQx8G1/ArcGIS/rest/services/CentrosSaludARM/FeatureServer/0");
        mapMain.addLayer(hospitals);

        var gpServiceArea = new Geoprocessor("https://formacion.esri.es/server/rest/services/RedMadrid/NAServer/Service%20Area");

        gpServiceArea.outSpatialReference = mapMain.spatialReference;

        //var queryHospitals = new Query(hospitals)
        //queryHospitals.geometry=
        
        mapMain.on('load',AreaServicio);

        function AreaServicio(evt){
            mapMain.Graphics.clear();
            var featureSet = new FeatureSet;
            
            var queryFacilities = new Query();
            queryFacilities.where = "1=1"
            hospitals.selectFeatures(queryFacilities, "selection-complete");
            var params= {
                "defaultBreaks":[3] ,"facilities": featureSet, impedanceAtributte: "TiempoPie"
            }
            gp.execute(params, poligonos)

        };
        

        //function poligonos ();

            //var polySymbolBlue = new SimpleFillSymbol();
                //polySymbolBlue.setOutline(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 0, 0, 0.5]), 1));
                //polySymbolBlue.setColor(new Color([0, 0, 255, 0.7]));
                //feature.setSymbol(polySymbolBlue);



           

    }
)