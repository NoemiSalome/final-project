# Final Project - Portfolio Anina Schmid
For the final project of the Technigo bootcamp I decided to build the portfolio of a friend of mine. She's about to enter the working world as an architect and will use the portfolio to apply for jobs. It was a great joy and very interesting not only to find what I've truly learned during the past couple of weeks and where my weaker spots are, but also to really focus on the parts I enjoy most and to have a bit of a true-client-case-atmosphere.

The idea was to build a portfolio, that is easy for my friend to maintain herself (adding projects, changing images, etc.) after I'm finished (well I kind of won't never truly be finished with it). For me it was clear from the start out, that I want to focus on the frontend part (not only codewise, but also design).

## Design
Starting out with bouncing ideas with my friend and learning what was importent to her, I designed a first sketch of the whole application with miro (https://miro.com/app/board/o9J_lA2ZFO8=/). It only changed slightly during the process when coming across another new idea or a more suitable package. 

## Frontend
The frontend is build with React as the framework. Even though the app is responsive, the UI/UX focus was on screens above 768px. All styling happened first in my head and then translating it into code using Styled Components. There are two different designs for the detailed display of the projects and is rendered conditionally dependending on the screen size of the user. 
### View it live
https://aninaschmid.netlify.app/

## Backend
I went with Sanity.io as the CMS, which at the same time works as my backend. Considering that my friend doesn't know how to code, Sanity (or any CMS for that matter) was the perfect choice. I started out with building the schemas and build the CMS, so that while I continued on the frontend, my friend was able to add and edit the content to the API. Sanity offers a great documentation and a very helpful slack community, which was quite valuable since CMS and GROQ as the query language of Sanity was not covered in the bootcamp
### View it live
Here you can see the Sanity Stuio (but not edit, so don't even think about it): https://portfolio-anina.sanity.studio/desk

### Packages used
- react-icons for the chevrons in the image slider
- lottie-web for the loading animation (while fetching the data from the API)
- react-router-dom for routing through the app
- rellax for the scrolling effect in the ProjectdetailBigScreen-component (different speed of the div's when scrolling)
- react-responsive-modal for the navigation

## Biggest challenges
Deleting a production file in sanity was not my smartest move in live. Figuring that out took quite a bit of time and restarting the whole connection to a new API was great practice, but unnecessary. At least I learnt my lesson. Other than that the project went by quite smoothly. I guess it is not too exciting codewise, but having a clear idea of the design and the app matching that design in the end, took quite some time. And not losing focus on the design along the way even though it sometime was not working the way I wanted it to, was hard sometimes. 

## Follow-up features
From the strech goals I had the next feature, I'll implement is clicking on a Image in the ProjectdetailBigScreen-component to start a full-screen gallery of all images (with a zoom function). This is quite important to truly see the sketches or plans of the single projects.
Furthermore I created a react spring animation for the home-screen on codesandbox, but couldn't quite make it work in this project yet.