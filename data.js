var APP_DATA = {
  "scenes": [
    {
      "id": "0-study",
      "name": "Study",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.2619742606324227,
        "pitch": 0.007220765663234374,
        "fov": 1.3726940369267648
      },
      "linkHotspots": [
        {
          "yaw": -0.005208506827976578,
          "pitch": 0.22641080944443104,
          "rotation": 0,
          "target": "1-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-passage",
      "name": "Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3884707120322854,
          "pitch": 0.55150079633564,
          "rotation": 0,
          "target": "2-laundry"
        },
        {
          "yaw": 2.680779621958436,
          "pitch": 0.20923589498056394,
          "rotation": 0,
          "target": "0-study"
        },
        {
          "yaw": 0.22586469594192415,
          "pitch": 0.13472044227044755,
          "rotation": 0,
          "target": "3-meals"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8334884519898047,
          "pitch": 0.33162465829853893,
          "rotation": 0,
          "target": "1-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-meals",
      "name": "Meals",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9003196365942383,
          "pitch": 0.16498280711618918,
          "rotation": 0,
          "target": "2-laundry"
        },
        {
          "yaw": -0.6016068641112415,
          "pitch": 0.08899647232543728,
          "rotation": 0,
          "target": "4-bedroom1"
        },
        {
          "yaw": 0.1087767969901634,
          "pitch": 0.09920307278875917,
          "rotation": 0,
          "target": "6-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom1",
      "name": "Bedroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9216946810696616,
          "pitch": 0.3349399325695366,
          "rotation": 0,
          "target": "3-meals"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.059799722384085,
        "pitch": 0.4205420821285557,
        "fov": 1.3726940369267648
      },
      "linkHotspots": [
        {
          "yaw": 1.3747676277694563,
          "pitch": 0.2666150769615552,
          "rotation": 0,
          "target": "3-meals"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4033362877483402,
          "pitch": 0.1704429837369208,
          "rotation": 0,
          "target": "5-bathroom"
        },
        {
          "yaw": 0.25654320002718123,
          "pitch": 0.0865339050948819,
          "rotation": 0,
          "target": "1-passage"
        },
        {
          "yaw": -3.0889659494430433,
          "pitch": 0.09306284789233743,
          "rotation": 0,
          "target": "7-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-family",
      "name": "Family",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3624772557009077,
          "pitch": 0.15032454595247913,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -1.002950754797439,
          "pitch": 0.2517525963175977,
          "rotation": 0,
          "target": "8-corridor"
        },
        {
          "yaw": 2.9383688663830974,
          "pitch": 0.005928754781322709,
          "rotation": 0,
          "target": "3-meals"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9789679383645833,
          "pitch": 0.13817954674874855,
          "rotation": 0,
          "target": "7-family"
        },
        {
          "yaw": 1.4694149548118602,
          "pitch": 0.22022928482214965,
          "rotation": 0,
          "target": "10-master"
        },
        {
          "yaw": -1.0938718792573905,
          "pitch": 0.3415538151431683,
          "rotation": 0,
          "target": "9-bedroom2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom2",
      "name": "Bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1824143229853057,
          "pitch": 0.32970328137306915,
          "rotation": 0,
          "target": "8-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1725925996245117,
          "pitch": 0.38260892354745657,
          "rotation": 0,
          "target": "11-ensuite"
        },
        {
          "yaw": -1.3510203776471315,
          "pitch": 0.28195399906806173,
          "rotation": 0,
          "target": "8-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2069370126881527,
          "pitch": 0.3858197239738459,
          "rotation": 0,
          "target": "10-master"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "brighton",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
