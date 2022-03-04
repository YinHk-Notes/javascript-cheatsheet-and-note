/* fetch is asynchronous, many Web API features now use asynchronous code to run, especially those that access or fetch some kind of resource from an external device, such as fetching a file from the network, accessing a database and returning data from it, accessing a video stream from a web cam, 
   or broadcasting the display to a VR headset. */

// syntax
fetch('url')
	.then(response => response.json())
		.then(data => { })

fetch(url, [options])

// eg
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
}
 
fetch('https://example.com', options)
  .then(response => response.json())
  .then(console.log)

