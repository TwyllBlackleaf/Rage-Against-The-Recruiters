const statusContainer = document.querySelector('#opportunity-status');
const recruiterName = JSON.parse(localStorage.getItem('user')).username;
const recruiterId = JSON.parse(localStorage.getItem('user')).id;

document.querySelector('#recruiter-name').textContent = recruiterName;

function clearStatus() {
    statusContainer.innerHTML = '';
}

function renderOpportunity(event) {
    clearStatus();

    fetch('/api/opportunity/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        response.json().then(data => {
            statusContainer.innerHTML = '';

            data.opportunities.forEach(job => {
                if (job.recruiterid_fk === recruiterId) {
                    const jobLi = `${job.job_title} at ${job.company}`;
                    const statusLiEl = document.createElement('li');
    
                    statusContainer.appendChild(statusLiEl);
                    statusLiEl.innerHTML = jobLi;
                }
            });

        })
    })
}

renderOpportunity();