# orbitz
2d multi-body orbital physics simulation in which multiple bodies with randomly generated sizes and masses are placed in a periodic boundary environment while simulating gravitational forces between multiple objects.
## Background
* This project is not currently in a working state but is getting close. 
* Currently, objects will not follow normal gravitational trajectories and will move similar to video game movement patterns.
## Dependencies
* Requires p5js
## Usage
* This project was created to help me buff up my programming abilities as well as my ability to make a physical simulation using existing physics equations
## Recent Changes
* Rewrote lines in the applyForce() method in planets.js to make forces apply themselves at a lower rate.
* Changed directional calculations to degrees in order to fix errors with the direction of the planet's velocities.
## Future Plans
* Add ability to create planets.
  - upon clicking on a planet, a window is brought up allowing velocity, mass, and size to be calculated.
* Add ability to customize gravitational force of a planet as well as make stationary.
  - Gravity will be calculated based on the mass.
* Add collision to the planets.
  - collisions will include some amount of elasticity.
* Add some artistic elements to make simulation easier to look at.
  - different planet texture, background, and other visual tweaks.
