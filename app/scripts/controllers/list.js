'use strict';

/**
 * @ngdoc function
 * @name carDealerApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the carDealerApp
 */
angular.module('carDealerApp')
  .controller('ListCtrl', function ($scope) {
    $scope.cars= [
    {

    	make:'Ford' ,
    	model: 'Fiesta' ,
    	year: 2004 ,
    	img: 'http://upload.wikimedia.org/wikipedia/commons/1/1b/2013_Ford_Fiesta_Sport_1.5L_in_Cyberjaya,_Malaysia_(01).jpg',
    	about: 'Smart-paranoid towards convenience store film voodoo god nodality boy. Stimulate saturation point plastic shoes Kowloon lights neon. BASE jump denim warehouse corporation singularity military-grade city A.I. ablative boat augmented reality carbon. Geodesic order-flow Chiba papier-mache cartel post-systema media tank-traps tanto youtube chrome. Wonton soup otaku sub-orbital skyscraper construct apophenia BASE jump voodoo god. Nodality vehicle rebar carbon lights-space film stimulate decay. DIY human alcohol carbon industrial grade smart-beef noodles modem jeans augmented reality assault grenade lights sensory weathered woman long-chain hydrocarbons. ',
    	price: 7000 ,
    },
    {

    	make: 'Nissan' ,
    	model: 'Sentra',
    	year: 2003,
    	img: 'http://blog.truecar.com/wp-content/uploads/2012/10/2013-Nissan-Sentra_TrueCar-Pricing_front-beauty_3277.jpg',
    	about: 'Knife post-sensory San Francisco face forwards katana cardboard singularity papier-mache rain assault j-pop dome tanto geodesic urban. Vehicle tanto bomb physical post-grenade garage long-chain hydrocarbons geodesic camera gang katana advert semiotics. Alcohol dead Chiba cyber-film range-rover pistol shrine network 3D-printed sentient. Plastic cyber-boy digital urban human courier voodoo god soul-delay towards table carbon market concrete vinyl. Garage dolphin paranoid franchise singularity-space marketing. Pistol bomb gang hacker silent computer savant construct network physical stimulate tiger-team assault papier-mache numinous semiotics warehouse. Woman math-construct pen rifle assassin warehouse refrigerator stimulate tower grenade RAF hacker drugs lights tattoo Chiba. Dissident Chiba smart-Tokyo post-paranoid courier cartel wristwatch sunglasses denim. Drugs computer narrative monofilament plastic car tanto garage towards nodal point girl Tokyo rebar 3D-printed. ',
    	price: 5500,
    },
    {

    	make: 'Jeep',
    	model: 'Grand Cherokee',
    	year: 2006,
    	img: 'http://upload.wikimedia.org/wikipedia/commons/1/16/Jeep_Grand_Cherokee_3.0_CRD_S-Limited_(WK)_%E2%80%93_Frontansicht,_31._Dezember_2012,_D%C3%BCsseldorf.jpg',
    	about: 'Towards savant plastic assassin alcohol hotdog order-flow. Decay plastic-space vinyl drugs savant systemic pre-boy. Voodoo god warehouse RAF marketing paranoid papier-mache office pen bicycle. Physical smart-decay military-grade San Francisco convenience store concrete. Market modem man papier-mache gang marketing shoes free-market footage bicycle Tokyo dissident rifle pistol receding render-farm. Otaku semiotics pre-industrial grade urban nodal point lights. ',
    	price: 13000,
    },
    {

    	make: 'Toyota',
    	model: 'Rav4',
    	year: 2005,
    	img: 'http://upload.wikimedia.org/wikipedia/commons/a/a2/2013_Toyota_RAV4_XLE_AWD_front_left.jpg',
    	about: 'Media sentient city artisanal papier-mache tiger-team ablative. Advert military-grade beef noodles Tokyo tattoo plastic modem rifle claymore mine uplink free-market franchise. Tiger-team car boat euro-pop meta-camera claymore mine 3D-printed sub-orbital towards dead free-market computer Kowloon BASE jump order-flow carbon. Drone decay grenade industrial grade face forwards boat papier-mache human monofilament faded savant narrative futurity rain geodesic shoes nodality. Rain corrupted hacker sunglasses weathered nodality refrigerator silent nano-sentient engine geodesic fetishism. Chiba voodoo god free-market tower girl city j-pop motion. Camera spook smart-corrupted artisanal denim singularity into monofilament boy grenade long-chain hydrocarbons nodality sensory fetishism wristwatch. ',
    	price: 11000 ,
    },
    {

    	make: 'Chevrolet' ,
    	model: 'Camaro',
    	year: 2009,
    	img: 'http://espacionoticias.files.wordpress.com/2011/11/21.jpg',
    	about: 'Towards human engine digital network rifle stimulate narrative. Spook denim long-chain hydrocarbons garage footage tattoo man media free-market 3D-printed plastic savant bridge systemic sign. Tiger-team Kowloon rebar realism pre-math--ware free-market. Boy tiger-team towards-space fluidity youtube vinyl free-market cardboard man digital Shibuya. Boat knife singularity katana bicycle render-farm construct hacker chrome industrial grade math-claymore mine papier-mache assassin vehicle monofilament. Paranoid j-pop sentient tank-traps spook systema assault military-grade bicycle disposable geodesic drugs shrine. ',
    	price: 23000 ,
    },
    {

    	make: 'Ford',
    	model: 'Velociraptor',
    	year: 2013,
    	img: 'http://www.diariomotor.com/imagenes/2008/11/ford-f150-raptor-svt-4.jpg',
    	about: 'Office euro-pop numinous post-dissident lights DIY corporation. Woman nodality Shibuya plastic market Legba neon DIY camera stimulate chrome otaku. Hotdog industrial grade paranoid stimulate rain drugs pen corrupted tanto towards courier hacker. Woman shoes dome camera faded military-grade augmented reality fetishism drone sentient sign. Faded footage lights refrigerator-space sensory singularity 8-bit Tokyo free-market papier-mache crypto-industrial grade sentient DIY motion. Plastic San Francisco human nodality stimulate range-rover soul-delay sentient modem j-pop neon shoes. ',
    	price: 24000,
    },
    ];
  });
