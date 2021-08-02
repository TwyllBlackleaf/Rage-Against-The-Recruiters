// use data from the form in createOpportunities.html to POST a new Opportunity

function createJob() {
    var id = localStorage.getItem("data").id;

    fetch(`/api/opportunity/${id}`, {
        method: "POST",
        body: {
            job_classification: "",
            company: "",
            job_title: "",
            job_description
        },
        headers: { 'Content-Type': 'application/json' }
    })
}
// get the ID of the new Opportunity and set it in localStorage as "currentJob"
