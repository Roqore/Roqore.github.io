import '@/style.css';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';
import { PageTitle } from '@/components/page-title';
import { initHeaderScroll } from '@/scripts/header';
import { initSmoothScroll } from '@/scripts/smooth-scroll';
import { careersAssessmentFormSubmit } from '@/scripts/careers-assessment-form-submit-message';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${Header()}

  ${PageTitle(
  'software-engineer-part-time-assessment-page-title',
  'Sofware Engineer',
  'To complete the assessment, <a class="a-link href="https://lyrical-bathtub-81b.notion.site/Candidate-Technical-Task-NestJS-Deployment-26a8f9ea718d80598ee3d8a942001722">read the instructions</a> carefully.'
)}

<section id="assessmentForm" class="page-block form-container">

  <form id="submissionForm">

    <div class="form-block">
      <!-- Basic Information -->
      <label for="name" class="required">Full Name</label>
      <input type="text" name="entry.1129625881" id="name" required>

      <label for="email" class="required">Email</label>
      <input type="email" name="entry.247944360" id="email" required>

      <label for="github" class="required">GitHub Repository Link</label>
      <input type="url" name="entry.1135979922" id="github" required>
    </div>
    
    <!-- Deployment Access Section -->
    <div class="form-block">
      <h2>Deployment Access</h2>
      <label for="droplet" class="required">Digital Ocean Droplet IP</label>
      <input type="text" name="entry.878124136" id="droplet" required>

      <label for="domain">Domain (if configured)</label>
      <input type="text" name="entry.94315360" id="domain">

      <label for="gdrive" class="required">Google Drive Folder Link (screenshots, files, etc.)</label>
      <input type="url" name="entry.28371363" id="gdrive" required>

      <label for="youtube" class="required">YouTube Unlisted Video Link (screen recording + explanation)</label>
      <input type="url" name="entry.445205642" id="youtube" required>
    </div>

    <!-- Task Documentation Section -->
    <div class="form-block">
      <h2>Task Documentation</h2>
      <label class="required">
          Did you create a meta.json file with descriptions?
      </label>
      <div class="radio-block">
        <label class="radio-btn">
          <input type="radio" name="entry.354904079" value="Yes" required>
          <span>Yes</span>
        </label>
        <label class="radio-btn">
          <input type="radio" name="entry.354904079" value="No">
          <span>No</span>
        </label>
      </div>

      <label for="structure">Please briefly describe the folder structure you submitted</label>
      <textarea name="entry.2088957365" id="structure" rows="4"></textarea>
    </div>

    <!-- Challenges and Solutions -->
    <div class="form-block">
      <h2>Challenges and Solutions</h2>
      <label for="issues" class="required">What issues/errors did you face during development or deployment?</label>
      <textarea name="entry.1758473856" id="issues" rows="4" required></textarea>

      <label for="solutions" class="required">How did you solve these issues?</label>
      <textarea name="entry.2103575875" id="solutions" rows="4" required></textarea>

      <label for="improvements" class="required">If you had more time, what improvement would you make?</label>
      <textarea name="entry.1530865687" id="improvements" rows="4" required></textarea>
    </div>

    <!-- Feedback -->
    <div class="form-block">
      <h2>Feedback</h2>
      <label for="rating" class="required">How would you rate the difficulty of this assessment? (1 = too easy, 5 =
          very challenging)</label>
      <select name="entry.634673150" id="rating" required>
          <option value="">Select rating</option>
          <option value="1">1 - Too Easy</option>
          <option value="2">2</option>
          <option value="3">3 - Moderate</option>
          <option value="4">4</option>
          <option value="5">5 - Very Challenging</option>
      </select>
      <label for="feedback">Do you have any feedback for us to improve this assessment?</label>
      <textarea name="entry.986608683" id="feedback" rows="4"></textarea>
    </div>

    <div class="form-block declaration">
      <input type="checkbox" name="entry.1504115380" value="I confirm this submission is my own work, and I have shared all required files/links." required>
      <label class="required">I confirm this submission is my own work, and I have shared all required files/links.</label>    
    </div>

    <!-- Submit -->
    <div class="submit-block">
      <button type="submit">Submit Assessment</button>
    </div>
  </form>

  <div class="message" id="successMessage">
    Thank you! Your submission has been recorded successfully.
  </div>

</section>

  ${Contact()}
  ${Footer()}
`;

initHeaderScroll();
initSmoothScroll();
careersAssessmentFormSubmit('submissionForm', 'successMessage', 'https://docs.google.com/forms/d/e/1FAIpQLSc2ogookr1b2TSXH1WpA3Iw35r8Bq_xthSBm6WyZSWsXsK0Zg/formResponse');