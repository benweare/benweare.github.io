window.onload = function(){
	// Add projects to column dynamically
	var projects_column = document.getElementById("projects-content-col")
	for(var i = 0; i < projects.length; i++){
		projects_column.innerHTML += create_project_card(projects[i])
	}
}

function create_project_card(project){
	var badges = ""
	var image = ""

	// Create picture content
	if(project.image){
		image = "<img src='" + project.image + "' class='card-img-top project_picture'>"
	}
	// Create project badges
	if(project.badges){
		badges += "<p>"
		for(var i = 0; i < project.badges.length; i++){
			badges += "<span class='badge badge-primary'>" + project.badges[i] + "</span>\n"
		}
		badges += "</p>"
	}
	// Set default link text
	if(!project.link_text) project.link_text = "<i class='fas fa-binoculars'></i> Explore"

	// Format of element
	return `
	<div class="col-lg-6 col-xl-3 mb-4">
		<div class="card h-100">
			` + image + `
			<div class="card-body">
				<h5 class="card-title">
					` + project.title + `
				</h5>
				` + badges + `
				<p class="card-text">` + project.body + `</p>
			</div>
			<div class="card-footer">
				<button class="btn btn-primary" style="width: 20%; margin-bottom: 0px;" onclick="window.open('` + project.link + `');">` + project.link_text + `</button>
			</div>
		</div>
	</div>
	`
}