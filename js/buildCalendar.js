// Get Today's Date
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();

// Declare Array of Months
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Declare Array of Events
eventObject1 = {date: new Date(2019, 9, 5, 19), title: "Cool Event", description: "Description"};
eventObject2 = {date: new Date(2019, 9, 10, 19), title: "Cool Event", description: "Description"};
eventObject3 = {date: new Date(2019, 8, 5, 19), title: "Cool Event", description: "Description"};
eventObject4 = {date: new Date(2019, 8, 10, 19), title: "Cool Event", description: "Description"};
eventsArray = [eventObject1, eventObject2, eventObject3, eventObject4];

// Call Functions to Create Calendar
showCalendar(currentMonth, currentYear);

// Calculate Number of Days in Any Given Month
function numDaysInMonth(month, year) {
	return 32 - new Date(year, month, 32).getDate();
}

// Create Calendar
function showCalendar(month, year) {
	document.getElementById("todaysMonthYear").innerHTML = months[month] + " " + year;
	firstDay = (new Date(year, month)).getDay();
	body = document.getElementById("calendarBody");
	body.innerHTML = "";

	// Create Cells in the Calendar
	calendarDay = 1;
	for (week = 0; week < 6; week++) {
		let row = document.createElement("tr"); // for each week, create a row
		for (day = 0; day < 7; day++) {
			// Fill in empty boxes at end of month
			if (calendarDay > numDaysInMonth(currentMonth, currentYear)) {
			 	for (i = day; i < 7 && day != 0; i++) {
			 		cell = document.createElement("td");
                	cellText = document.createTextNode("");
                	cell.appendChild(cellText);
                	row.appendChild(cell);
			 	}
			 	break;
			}
			// Fill in empty boxes at beginning of month
			else if (week == 0 && day < firstDay) {
			 	cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
			}
			// Fill in boxes with dates
			else {
			 	cell = document.createElement("td");
			 	cellText = document.createTextNode(calendarDay);
			 	cell.appendChild(cellText);
			 	cell.appendChild(document.createElement("br"));
			 	// Check if there is an event that day
			 	cell.appendChild(eventToday(eventsArray, currentYear, currentMonth, calendarDay));
                row.appendChild(cell);
                calendarDay++;
			}
		}
		// Only add 6th row if needed (when first day of the week exists)
		if (row.getElementsByTagName("td")[0].innerHTML != null) {
		 	body.appendChild(row);
		}
	}
}

function next() {
	currentYear = (currentMonth == 11) ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

function prev() {
	currentYear = (currentMonth == 0) ? currentYear - 1 : currentYear;
	currentMonth = (currentMonth == 0) ? 11 : currentMonth - 1;
	showCalendar(currentMonth, currentYear);
}

function goToToday() {
	currentMonth = today.getMonth();
	currentYear = today.getFullYear();
	showCalendar(currentMonth, currentYear);
}

function addEventButton(eventDetails) {
	eventButton = document.createElement("button");
	// var eventButton = document.createElement("a");
	eventButton.setAttribute("class", "btn btn-sm btn-block eventButton");
	eventButton.setAttribute("data-toggle", "popover");
	eventButton.setAttribute("data-title", eventDetails["title"]);
	eventButton.setAttribute("data-content", eventDetails["description"]);
	eventButton.setAttribute("data-trigger", "focus");
	eventButton.innerHTML = eventDetails["title"];
	return eventButton;
}

function eventCheck(eventDetails, year, month, day) {
	if (year == eventDetails["date"].getFullYear() && month == eventDetails["date"].getMonth() && day == eventDetails["date"].getDate()) {
		return true;
	}
	return false;
}

function eventToday(eventDetails, year, month, day) {
	for (i = 0; i < eventDetails.length; i++) {
		if (eventCheck(eventsArray[i], year, month, day)) {
			return addEventButton(eventsArray[i]);
		}
	}
	return document.createElement("br");
}