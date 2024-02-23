'use strict' // strict mode
const sidebar = document.querySelector(".sidebar-side");

const sidebarHTML = `
<div class="container">
            <div>
              <h3>News</h3>
              <p>Abstract Submission opens on February 1st, 2015</p>
            </div>
            <div>
              <h3>Deadline</h3>
              <p>
                Submitting projects is extended to Sunday 12/4/2015 at 2:00 PM.
              </p>
            </div>
            <div>
              <h3>Evaluation</h3>
              <p>
                Results have been sent through emails. For the Public Safety and
                Quality of Life track, the results will be announced on Friday
                24/4.
              </p>
            </div>
            <div>
              <h3>Notification</h3>
              <p>
                Results for all tracks have been sent out. Congratulations for
                qualifying teams.
              </p>
            </div>
          </div>
`

sidebar.insertAdjacentHTML("beforeend", sidebarHTML);