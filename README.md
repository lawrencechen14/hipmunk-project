# Hipmunk-Project
This is a small user interface project built for Hipmunk, an SAP Concur online travel company. This application was built primarily using the front-end technologies React.js and ES6.

## How to View
1) Download or clone this repository.
2) Navigate to this repository on the terminal of your local computer and run <code>yarn start</code>. This should open the development build of the project on your computer.
3) If you get any issues with dependencies, make sure you have all React components necessary. Specifically for this project I rely on reflexbox and react-bootstrap, so if you are missing those, run <code>yarn add reflexbox</code>, or <code>yarn add react-bootstrap</code> to add them.

## Steps That I Took
1) I started with create-react-app in order to set up my working environment and place to develop this project.
2) I parsed and added the output of one of the Hipmunk API endpoints, now in a file called data.json.
3) Given that the task was to make a 3-by-however many hotels were in the JSON file, I used the Box component from reflexbox, where I fit 3 tiles for each row.
4) To obtain the correct data for each tile, I had to access information in the JSON file using ES6, where I obtained information such as the thumbnail URL, name, review scores, and nearby points of interest. I included all of this and tailored the information nicely in each tile. Most of this work can be found in Tiles.js.
5) At the end I added a button that links to the Hipmunk website. I originally intended to have a button that links to that hotel's website, but there were no such links provided in the JSON file.

## Future Improvements
- Styling in general could be done better, as the styles for the text are plain, but time only allowed this for now.
- The thumbnail URLs linked to very low resolution images, therefore when they were blown up to fit the screen they appear very pixelated and grainy. They could be linked to higher resolution pictures.
- Before using a button, I tried using a dropdown component from react-bootstrap and other places, but none of them worked as expected. It would be better later to find a way to integrate dropdowns.
- Coding style in general. Most of the React styling was done inline due to some limitations (I had to select the correct images for each tile, for example). The abstractions also do not flow, as I orignally planned that Tiles.js be a component for one hotel tile, but it ended up encompassing all tiles for the JSON file as I became carried away while working.
