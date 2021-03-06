var assert = require("assert")
var d3 = require('../node_modules/d3/d3.js');
var composite_projection = require('../composite-projections.js');
var createSvgSample = require('./createSvgSample.js');
describe('Composite Projections', function(){

  describe('Methods', function(){
    it('All projections must be defined', function(){
        assert.equal(typeof d3.geo.albersUsa , 'function');
        assert.equal(typeof d3.geo.conicConformalSpain , 'function');

    });
  });

  describe('USA', function(){
    it('Must have a getCompositionBorders method', function(){
      var proj = d3.geo.albersUsa();

      //console.log(proj.invert(proj([-120.50000000,   47.50000000])));
      assert.equal(typeof proj.getCompositionBorders , 'function');
    });
  });

  describe('Spain', function(){
    it('Projection results should be correct', function(){

        var proj = d3.geo.conicConformalSpain();
        assert.equal(2500, proj.scale());


        var barcelona = [2.0, 41.0];
        var las_palmas = [-15.0, 28.0];

        var inv_barcelona = proj.invert(proj(barcelona));
        var inv_las_palmas = proj.invert(proj(las_palmas));

        assert.ok((inv_barcelona[0] - barcelona[0]) < 0.0001);
        assert.ok((inv_barcelona[1] - barcelona[1]) < 0.0001);

        assert.ok((inv_las_palmas[0] - las_palmas[0]) < 0.0001, "Las Palmas should be properly reprojected");
        assert.ok((inv_las_palmas[1] - las_palmas[1]) < 0.0001);


    });
  });

  describe('Portugal', function(){
    it('Projection results should be correct', function(){

        var proj = d3.geo.conicConformalPortugal();
        assert.equal(3000, proj.scale());

        var lisboa = [-9.15, 38.7];
        var ponta_delgada = [-25.7, 37.7];
        var funchal = [-16.91, 32.667];

        var inv_lisboa = proj.invert(proj(lisboa));
        var inv_ponta_delgada = proj.invert(proj(ponta_delgada));
        var inv_funchal = proj.invert(proj(funchal));

        assert.ok((inv_lisboa[0] - lisboa[0]) < 0.0001);
        assert.ok((inv_lisboa[1] - lisboa[1]) < 0.0001);

        assert.ok((inv_ponta_delgada[0] - ponta_delgada[0]) < 0.0001, "Ponta Delgada must be translated");
        assert.ok((inv_ponta_delgada[1] - ponta_delgada[1]) < 0.0001);

        assert.ok((inv_funchal[0] - funchal[0]) < 0.0001, "Funchal must be translated");
        assert.ok((inv_funchal[1] - funchal[1]) < 0.0001);

    });
  });

  describe('France', function(){
    it('Projection results should be correct', function(){

        var proj = d3.geo.conicConformalFrance();
        assert.equal(2300, proj.scale());


        var paris = [2.3, 48.9];
        //Cayenne (Guyane)
        var cayenne = [-52.3, 4.91];
        //Saint-Denis (Reunion)
        var saintDenis = [55.45, -20.88];
        //Mamoudzou (Mayotte) 45.23, -12.7777
        var mamoudzou = [45.23, -12.78];
        //Fort de France (Martinique) -61.058909 14.607208,;
        var fortDeFrance = [-61.0589, 14.607];
        //Pointe-à-Pitre (Guadeloupe) -61.535311, 16.244799
        var pointeAPitre = [-61.5353, 16.2448];
        //Nouméa (Nouvelle Calédonie) 166.484263, -22.254973
        var noumea = [166.484263, -22.254973];
        //Papeete (Polynesie) -149.567121 -17.532704,
        var papeete = [-149.567121, -17.532704];
        //Kolotai (Wallis et futuna) -178.080656 -14.311235,
        var kolotai = [-178.080656, -14.311235];
        //St Pierre (St Pierre et Miquelon)  -56.173538, 46.780368,
        var stPierre = [-56.173538, 46.780368];
        //Gustavia (St. Barthélemy ) -62.851940 17.895830,
        var gustavia = [-62.851940, 17.895830];


        var inv_paris = proj.invert(proj(paris));
        var inv_cayenne = proj.invert(proj(cayenne));
        var inv_saintDenis = proj.invert(proj(saintDenis));
        var inv_mamoudzou = proj.invert(proj(mamoudzou));
        var inv_fortDeFrance = proj.invert(proj(fortDeFrance));
        var inv_pointeAPitre = proj.invert(proj(pointeAPitre));
        var inv_noumea = proj.invert(proj(noumea));
        var inv_papeete = proj.invert(proj(papeete));
        var inv_kolotai = proj.invert(proj(kolotai));
        var inv_stPierre = proj.invert(proj(stPierre));
        var inv_gustavia = proj.invert(proj(gustavia));

        assert.ok((inv_paris[0] - paris[0]) < 0.0001);
        assert.ok((inv_paris[1] - paris[1]) < 0.0001);

        assert.ok((inv_cayenne[0] - cayenne[0]) < 0.0001, "Cayenne should be properly reprojected");
        assert.ok((inv_cayenne[1] - cayenne[1]) < 0.0001);

        assert.ok((inv_saintDenis[0] - saintDenis[0]) < 0.0001, "saintDenis should be properly reprojected");
        assert.ok((inv_saintDenis[1] - saintDenis[1]) < 0.0001);

        assert.ok((inv_mamoudzou[0] - mamoudzou[0]) < 0.0001, "mamoudzou should be properly reprojected");
        assert.ok((inv_mamoudzou[1] - mamoudzou[1]) < 0.0001);

        assert.ok((inv_fortDeFrance[0] - fortDeFrance[0]) < 0.0001, "fortDeFrance should be properly reprojected");
        assert.ok((inv_fortDeFrance[1] - fortDeFrance[1]) < 0.0001);

        assert.ok((inv_pointeAPitre[0] - pointeAPitre[0]) < 0.0001, "pointeAPitre should be properly reprojected");
        assert.ok((inv_pointeAPitre[1] - pointeAPitre[1]) < 0.0001);

        assert.ok((inv_noumea[0] - noumea[0]) < 0.0001, "noumea should be properly reprojected");
        assert.ok((inv_noumea[1] - noumea[1]) < 0.0001);


        assert.ok((inv_papeete[0] - papeete[0]) < 0.0001, "papeete should be properly reprojected");
        assert.ok((inv_papeete[1] - papeete[1]) < 0.0001);

        assert.ok((inv_kolotai[0] - kolotai[0]) < 0.0001, "kolotai should be properly reprojected");
        assert.ok((inv_kolotai[1] - kolotai[1]) < 0.0001);

        assert.ok((inv_stPierre[0] - stPierre[0]) < 0.0001, "stPierre should be properly reprojected");
        assert.ok((inv_stPierre[1] - stPierre[1]) < 0.0001);

        assert.ok((inv_gustavia[0] - gustavia[0]) < 0.0001, "gustavia should be properly reprojected");
        assert.ok((inv_gustavia[1] - gustavia[1]) < 0.0001);

    });
  });

  describe('Create sample SVGs', function(){
    /* I still have to test something, but simply generating the SVG can htlp to see visually is everything works
    The test is outside each projection to make easy to skip, since it takes its time*/
    it('Spain SVG sample', function(){
        createSvgSample.createSvgSample("provincias.json", "conicConformalSpain", "conicConformalSpain.svg", "provincias");

    });

    it('USA SVG sample', function(){
        createSvgSample.createSvgSample("us.json", "albersUsa", "albersUsa.svg","states");

    });

    it('Portugal SVG sample', function(){
        createSvgSample.createSvgSample("world-50m.json", "conicConformalPortugal", "conicConformalPortugal.svg", "countries");

    });

    it('France SVG sample', function(){
        createSvgSample.createSvgSample("france.json", "conicConformalFrance", "conicConformalFrance.svg", "regions");

    });
  });


});
