import $ from 'jquery'

export function POST(url, data, dataType="json", contentType="application/json") {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'POST',
      url: url,
      data: JSON.stringify(data),
      dataType:  dataType,
      contentType: contentType,
      beforeSend: function (request){

      },
      success: (response) =>{
        resolve(response);
      },
      error: (err) =>{
        reject(err);
      }
    })
  })
}

export function PUT(url, data, dataType="json", contentType="application/json") {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'PUT',
      url: url,
      data: JSON.stringify(data),
      dataType:  dataType,
      contentType: contentType,
      beforeSend: function (request){

      },
      success: (response) =>{
        resolve(response);
      },
      error: (err) =>{
        reject(err);
      }
    })
  })
}

export function GET(url, dataType="json") {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'GET',
      url: url,
      dataType: dataType,
      beforeSend: function (request){
        request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      },
      success: (response) => {
        resolve(response);
      },
      error: (err) => {
        reject(err);
      }
    });
  })
}

export function DELETE(url, dataType="json") {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'DELETE',
      url: url,
      dataType: dataType,
      success: (response) => {
        resolve(response);
      },
      error: (err) => {
        reject(err);
      }
    });
  })
}
