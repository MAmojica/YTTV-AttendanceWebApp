<h1>Youtube TV Training Team - Attendance Web App</h1>

<h2>Description</h2>
This project contains a script and HTML form that creates a simple attendance tracking system where new-hires or trainees can clock in and out. The system collects the user's email, fetches their information from a predefined allowlist, records the current date and Manila timestamp, and appends this data to a Google Spreadsheet. The web interface is styled using Tailwind CSS and provides user feedback with SweetAlert2 popups.
<br />
<br />

<p align="center">
<img src="https://github.com/MAmojica/YTTV-AttendanceWebApp/assets/78264218/0da175d1-0b98-4ef9-844d-9df4de20dbe1" height="65%" width="65%" alt="Youtube TV Training Team - Attendance Web App"/>

</p>
<h2>Languages and tools Used</h2>

- <b>Google Sheets:</b> database
- <b>Apps Scripts (frontend and backend):</b> HTML, CSS & Javascript

<h2>Process Flowchart</h2>

<p align="center">
<img src="https://github.com/MAmojica/YTTV-AttendanceWebApp/assets/78264218/afc3fa06-2a43-4848-b7bf-626db915273f" alt="Image Analysis Dataflow"/>
</p>


<h3> User Accesses the Web Application </h3> 

- The process initiates when the user opens the attendance tracking web application.

<h3> Server-side Functionality: `doGet()` </h3>

- The server generates an HTML output from the file `page.html`.
- The page title is set to "Attendance Tracker".
- The generated HTML output is sent back to the client.

<h3> Client-side Functionality: Page Load </h3>

- Upon loading the HTML page, client-side JavaScript begins execution.
- Event listeners are set up for load and button click events.

<h3> Client-side Functionality: `displayCurrentDate()` Function </h3>

- The client invokes `displayCurrentDate()`, which in turn calls the server-side function `google.script.run.getCurrentTime()`.

<h3> Server-side Functionality: `getCurrentTime()` Function </h3>

- The server retrieves the current time in milliseconds.
- The current time is sent back to the client.

<h3> Client-side Functionality: Setting `currentDate` Value </h3>

- The client formats the server time to the local date.
- The formatted date is set as the value of the `currentDate` input field.

<h3> Client-side Functionality: Retrieving User Email </h3>

- The client calls `google.script.run.getUserEmail()` to obtain the user's email.

<h3> Server-side Functionality: `getUserEmail()` Function </h3>

- The server retrieves the active user's email.
- The email is sent back to the client.

<h3> Client-side Functionality: Calling `getUserInfo(userEmail)` </h3>

- Using the retrieved email, the client calls `google.script.run.getUserInfo(userEmail)`.

<h3> Server-side Functionality: `getUserInfo(userEmail)` Function </h3>

- The server fetches user information from the "allowlist" sheet in the Google Spreadsheet.
- User information, including full name, cognizant EID, wave, and tower, is returned to the client.

<h3> Client-side Functionality: Populating User Info </h3>

- The client populates the form fields with the retrieved user information.

<h3> Client-side Functionality: Clock In/Out Button Click </h3>

- Upon clicking the Clock In or Clock Out button, the `clockInOrOut(status)` function is triggered.
- Event listeners handle button clicks, retrieve form data, and validate inputs.

<h3> Client-side Functionality: Validation </h3>

- Form data is retrieved and validated.
- If validation fails, an error message is displayed using SweetAlert2, and the process halts.
- If validation succeeds, the client calls `google.script.run.getCurrentTime()` to get the current time.

<h3> Server-side Functionality: `getCurrentTime()` Function </h3>

- The server retrieves the current time in milliseconds.
- The current time is sent back to the client.

<h3> Client-side Functionality: Retrieving Server Time </h3>

- The client formats the server time to the local date.
- The client calls `google.script.run.getManilaTimestamp()` to obtain the Manila timestamp.

<h3> Server-side Functionality: `getManilaTimestamp()` Function </h3>

- The server fetches and formats the Manila timestamp.
- The Manila timestamp is sent back to the client.

<h3> Client-side Functionality: Preparing Data Array </h3>

- The client creates a data array containing various details such as current date, shift date, user email, full name, cognizant EID, wave, tower, screenshot, status, and Manila timestamp.
- The client calls `google.script.run.exportData(data)` to export the data.

<h3> Server-side Functionality: `exportData(data)` Function </h3>

- The server appends the data array to the active sheet in the Google Spreadsheet.

<h3> Client-side Functionality: Displaying Success Message </h3>

- The client displays a success message using SweetAlert2 based on the status (Clock In or Clock Out).

<h3> End of Process </h3>

- The process concludes successfully.
  
<!--
 ```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
--!>
