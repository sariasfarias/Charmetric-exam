const response = [
    {
      id: 1293487,
      name: "KCRW",  // radio station callsign
      tracks: [{ timestp: "2021-04-08", trackName: "Peaches" }]
    },
    {
      id: 12923,
      name: "KQED",
      tracks: [
        { timestp: "2021-04-09", trackName: "Savage" },
        { timestp: "2021-04-09", trackName: "Savage (feat. Beyonce)" },
        { timestp: "2021-04-08", trackName: "Savage" },
        { timestp: "2021-04-08", trackName: "Savage" },
        { timestp: "2021-04-08", trackName: "Savage" }
      ]
    },
    {
      id: 4,
      name: "WNYC",
      tracks: [
        { timestp: "2021-04-09", trackName: "Captain Hook" },
        { timestp: "2021-04-08", trackName: "Captain Hook" },
        { timestp: "2021-04-07", trackName: "Captain Hook" }
      ]
    }
  ];

function simplifingResponse(response){
    let tracks_information = [];
    for (const response_item of response ) {
      for(const track of response_item.tracks){      
        if(tracks_information.some(e=> e[0] == track.timestp && e[1] == track.trackName)){
          const track_index = tracks_information.findIndex(e=> e[0] == track.timestp && e[1] == track.trackName);
          tracks_information[track_index][2]+=1;
        }else{
          const new_track = [track.timestp, track.trackName, 1];
          tracks_information.push(new_track);
        }
      }
    }
    return tracks_information;
};

function getDataInformation(tracks_information){
    let data = [];
    for (const track of tracks_information){
         if (data.some(e=> e.x == track[0])){
           const data_index = data.findIndex(e=> e.x == track[0]);
           data[data_index].y +=  track[2];
           data[data_index].tooltip += ", " + track[1] + " (" + track[2] + ")";
         }else{
           const new_data = {
             x: track[0],
             y: track[2],
             tooltip: track[1].concat(" (1)")
           }
           data.push(new_data);
         }
    }
    return data;
};

function getData(response) {

    const tracks_information = simplifingResponse(response);
    
    const data = getDataInformation(tracks_information);

    return data;
};
