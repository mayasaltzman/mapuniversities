var config = {
    style: 'mapbox://styles/catherine-y/cl66ohvo5001q15oakxw0ibzk',
    accessToken: 'pk.eyJ1IjoiY2F0aGVyaW5lLXkiLCJhIjoiY2w1ZW4xMDRxMG9tMDNpbXgyaDczN2N5ZSJ9.hjtcgntjG0aeXAZRlPTctA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Map',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'canada',
            alignment: 'left',
            hidden: false,
            title: 'Canada',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-104.12783, 55.03328],
                zoom: 5.62,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'University of Montreal',
            //image: './path/to/image/source.png',
            description: 'Participant: Nicole Valois <br> Program: MLA',
            location: {
                center: [-73.61619, 45.50323],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    // layer: 'layer-name',
                    // opacity: 1,
                    // duration: 5000,
                }
            ],
            onChapterExit: [
                {
                    // layer: 'layer-name',
                    // opacity: 0
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'UBC',
            //image: './path/to/image/source.png',
            description: 'Participant: Fionn Byrne <br> Program: MLA',
            location: {
                center: [-123.25061, 49.26457],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'usa',
            alignment: 'right',
            hidden: false,
            title: 'USA',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [-98.01814, 41.10204],
                zoom: 4.53,
                pitch: 45.00,
                bearing: 0.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'University of Pennsylvania ',
            //image: './path/to/image/source.png',
            description: 'Participant: Keith VanDerSys <br> Program: MLA',
            location: {
                center: [-75.19406, 39.95297],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'City College of New York',
            //image: './path/to/image/source.png',
            description: 'Participant: Zihao Zhang <br> Program: MLA',
            location: {
                center: [-73.94927, 40.81995],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'University of Nevada, Las Vegas',
            //image: './path/to/image/source.png',
            description: 'Participant: Phillip Zawarus <br> Program: MLA',
            location: {
                center: [-115.14173, 36.10763],
                zoom: 15.94,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'University of Virginia',
            //image: './path/to/image/source.png',
            description: 'Participant: Lenna Cho <br> Program: MLA',
            location: {
                center: [-78.50400, 38.03517],
                zoom: 15.94,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Michigan State Univeristy',
            //image: './path/to/image/source.png',
            description: 'Participant: Fatemeh Saeidi-Rizi <br> Program: MLA',
            location: {
                center: [-84.48105, 42.72652],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eigth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Rutgers State University of New Jersey',
            //image: './path/to/image/source.png',
            description: 'Participant: David Tulloch <br> Program: MLA',
            location: {
                center: [-74.44776, 40.50006],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'switzerland',
            alignment: 'left',
            hidden: false,
            title: 'Switzerland',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [8.19309, 46.80286],
                zoom: 8.06,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'ETH Zürich',
            //image: './path/to/image/source.png',
            description: 'Participant: Benedikt Kowalewski  <br> Program: MLA',
            location: {
                center: [8.54723, 47.37650],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'netherlands',
            alignment: 'left',
            hidden: false,
            title: 'The Netherlands',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [5.52413, 52.00319],
                zoom: 8.51,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelfth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'TU Delft',
            //image: './path/to/image/source.png',
            description: 'Participant: Daniele Cannatella <br> Program: MLA',
            location: {
                center: [4.37176, 52.00222],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'iran',
            alignment: 'right',
            hidden: false,
            title: 'Iran',
            //image: './path/to/image/source.png',
            description: '',
            location: {
                center: [54.23206, 32.69011],
                zoom: 6.99,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Iran University of Science & Technology',
            //image: './path/to/image/source.png',
            description: 'Participant: Morteza Rahbar <br> Program: CD&Digital Fabrication',
            location: {
                center: [51.39557, 35.70444],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        //         {
        //             id: '14-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: '2.ink Studio',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Jonathan Beaver',
        //             location: {
        //                 center: [-122.65936, 45.52419],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '15-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'Perkins&Will',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Alexander Stewart',
        //             location: {
        //                 center: [-79.37872, 43.65011],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '16-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'Seferian Design Group',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Mike Flint',
        //             location: {
        //                 center: [-79.80811, 43.33328],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '17-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: 'Verzone Woods Architectes',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Craig Verzone',
        //             location: {
        //                 center: [6.84393, 46.46393],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '18-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'West 8',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: PR West 8',
        //             location: {
        //                 center: [4.48748, 51.90200],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '19-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: 'Lemay',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Niloufar Makaremi',
        //             location: {
        //                 center: [-79.37571, 43.65155],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '20-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'Dtah',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Elnaz Sanati',
        //             location: {
        //                 center: [-79.38471, 43.67313],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '21-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'Janet Rosenberg & Studio',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Colin Berman',
        //             location: {
        //                 center: [-79.42423, 43.68747],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '22-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'WXY',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Shurui Zhang',
        //             location: {
        //                 center: [-74.00911, 40.71310],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '23-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: 'Martha Schwartz Partners',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Mary Hughes',
        //             location: {
        //                 center: [-73.94759, 40.82454],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '24-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'thinc design',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Mike Tocher',
        //             location: {
        //                 center: [-79.41861, 43.63852],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '25-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: 'SE Group',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Anita Manitius',
        //             location: {
        //                 center: [-111.82409, 40.67075],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '26-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: 'City Intelligence Lab, Austrian Institute of Technology',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Angelos Chronis',
        //             location: {
        //                 center: [16.42694, 48.26910],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '27-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'University of Florida',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Karla Saldana Ochoa',
        //             location: {
        //                 center: [-82.34827, 29.64746],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '28-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'LANDAU Design+Technology',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Chris Landau',
        //             location: {
        //                 center: [-75.14675, 39.95068],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '29-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: 'SCAPE',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Nans Voron',
        //             location: {
        //                 center: [-114.36503, 43.68086],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '30-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: 'O2 Planning and Design',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Chris Hardwicke',
        //             location: {
        //                 center: [-114.07900, 50.98995],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '31-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'Hargreaves Jones Landscape Architecture',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Megan Esopenko',
        //             location: {
        //                 center: [-74.01170, 40.70627],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '32-identifier',
        //             alignment: 'left',
        //             hidden: false,
        //             title: 'DIALOG',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Khatereh Baharikhoob',
        //             location: {
        //                 center: [-79.38882, 43.64483],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '33-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: 'Brook McIlroy',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: Andrea Mantin',
        //             location: {
        //                 center: [-79.39569, 43.64837],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         },
        //         {
        //             id: '34-identifier',
        //             alignment: 'right',
        //             hidden: false,
        //             title: 'Fletcher Studiios',
        //             //image: './path/to/image/source.png',
        //             description: 'Participant: David Flether',
        //             location: {
        //                 center: [-122.38802, 37.76013],
        //                 zoom: 16.00,
        //                 pitch: 45.00,
        //                 bearing: -40.00
        //             },
        //             mapAnimation: 'flyTo',
        //             rotateAnimation: false,
        //             callback: '',
        //             onChapterEnter: [],
        //             onChapterExit: []
        //         }

    ]
};