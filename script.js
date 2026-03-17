/* FAQ ACCORDION */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
item.querySelector(".faq-question").addEventListener("click", () => {
item.classList.toggle("active");
});
});

/* CONNECT MODAL FUNCTIONS */
function openConnectModal() {
  const modal = document.getElementById("connectModal");
  modal.style.display = "flex";
  history.pushState({modalOpen: true}, "");
}

function closeConnect() {
  document.getElementById("connectModal").style.display = "none";
}

/* PROJECT MODAL SYSTEM */
function openProject(project){
const modal = document.getElementById("projectModal");
const body = document.getElementById("modalBody");

let content="";

if(project==="p1"){
content=`
<h2>AR Product Visualization System</h2>
<p>Developed an Augmented Reality product visualization experience that allows customers to view Glow Garden products in their real environment using 3D models. Customers can place the product in their space to understand size, placement, and visual appearance before purchasing.</p>
<p><strong>Technologies Used:</strong> AR Web Experience, GLB 3D Models</p>
<p><a href="https://glowgardenar.netlify.app/" target="_blank">View Reference</a></p>
<img src="ARGlowOFF.png">
<img src="ARGlowON.png">
<img src="ARCode.png">
`;
}

if(project==="p2"){
content=`
<h2>WhatsApp Automation System</h2>
<p>Built a custom WhatsApp automation system without using the official API. The system connects Google Sheets with WhatsApp using Python and browser automation.</p>
<p><strong>Technologies Used:</strong> Python, Selenium, Google Sheets</p>
<img src="WhatsappAutoLeads.png">
<img src="WhatsappAutoMsg.png">
<img src="WhatsappAutoMsg2.png">
<img src="WhatsappCode.png">
`;
}

if(project==="p3"){
content=`
<h2>Automated Lead Distribution & Sales Dashboard</h2>
<p>Designed a lead management system that automatically assigns leads to Regional Sales Managers based on the customer's city and region.</p>
<p><strong>Technologies Used:</strong> Google Sheets, Pivot Tables</p>
<img src="GGDashboard.png">
<img src="GGLeads.png">
<img src="GGPivotTable.png">
`;
}

if(project==="p4"){
content=`
<h2>Market Research Data System</h2>
<p>Conducted research on night attractions across India and organized the data into a structured spreadsheet system.</p>
<img src="NightAttractionAnalysis.png">
`;
}

if(project==="p5"){
content=`
<h2>Data Cleaning & Observation Reporting</h2>
<p>Improved the quality of an existing dataset by cleaning inconsistent entries and organizing the data for reporting.</p>
<img src="Data Cleaning & Observation Reporting.png">
`;
}

if(project==="p6"){
content=`
<h2>Product Catalogue Development</h2>
<p>Created a structured product catalogue to help the client present their offerings clearly to customers.</p>
<img src="Product Catalogue Development.png">
`;
}

if(project==="p7"){
content=`
<h2>Call Activity & Status Dashboard</h2>
<p>Developed a dashboard for a SAT-related company to track calling activity and outcomes. The system organizes large datasets of call records.</p>
<p><strong>Technologies Used:</strong> Advanced Excel / Google Sheets</p>
<img src="SATDashboard.png">
<img src="SATLeads.png">
`;
}

body.innerHTML = content;
modal.style.display="flex";
history.pushState({modalOpen:true},"");
}

function closeProject(){
document.getElementById("projectModal").style.display="none";
}

/* SERVICE MODAL FUNCTIONS */
function openService(service){
const modal = document.getElementById("serviceModal");
const body = document.getElementById("serviceBody");

let content="";

if(service==="s1"){
content=`
<h2>Excel & Google Workspace Problem Solving</h2>
<p>Get solutions for any Excel, Google Sheets, Microsoft Word, or PowerPoint problems — fixing formulas, cleaning data, or building automation systems.</p>
<div class="service-actions">
<a href="tel:+917499685501" class="contact-btn">Call</a>
<a href="https://wa.me/917499685501" target="_blank" class="whatsapp-btn">WhatsApp</a>
</div>
`;
}

if(service==="s2"){
content=`
<h2>Business Automation Systems</h2>
<p>Automate business workflows using Excel, Google Sheets, and integrations that reduce manual work.</p>
<div class="service-actions">
<a href="tel:+917499685501" class="contact-btn">Call</a>
<a href="https://wa.me/917499685501" target="_blank" class="whatsapp-btn">WhatsApp</a>
</div>
`;
}

if(service==="s3"){
content=`
<h2>CRM & Lead Management Systems</h2>
<p>Build custom lead tracking and CRM systems to manage sales pipelines and customer interactions.</p>
<div class="service-actions">
<a href="tel:+917499685501" class="contact-btn">Call</a>
<a href="https://wa.me/917499685501" target="_blank" class="whatsapp-btn">WhatsApp</a>
</div>
`;
}

if(service==="s4"){
content=`
<h2>Business Data & Reporting Systems</h2>
<p>Create dashboards, reporting tools, and organized data systems for business insights.</p>
<div class="service-actions">
<a href="tel:+917499685501" class="contact-btn">Call</a>
<a href="https://wa.me/917499685501" target="_blank" class="whatsapp-btn">WhatsApp</a>
</div>
`;
}

if(service==="s5"){
content=`
<h2>Spreadsheet Templates & Productivity Tools</h2>
<p>Custom templates for planning, operations tracking, and productivity management.</p>
<div class="service-actions">
<a href="tel:+917499685501" class="contact-btn">Call</a>
<a href="https://wa.me/917499685501" target="_blank" class="whatsapp-btn">WhatsApp</a>
</div>
`;
}

if(service==="s6"){
content=`
<h2>Communication & Messaging Automation</h2>
<p>Automate WhatsApp messaging, notifications, and communication workflows.</p>
<div class="service-actions">
<a href="tel:+917499685501" class="contact-btn">Call</a>
<a href="https://wa.me/917499685501" target="_blank" class="whatsapp-btn">WhatsApp</a>
</div>
`;
}

if(service==="s7"){
content=`
<h2>AR / Interactive Visualization Solutions</h2>
<p>Interactive augmented reality solutions for showcasing products digitally.</p>
<div class="service-actions">
<a href="tel:+917499685501" class="contact-btn">Call</a>
<a href="https://wa.me/917499685501" target="_blank" class="whatsapp-btn">WhatsApp</a>
</div>
`;
}

if(service==="s8"){
content=`
<h2>Custom Business Solutions</h2>
<p>Tailored automation systems, dashboards, and workflow tools built for your business needs.</p>
<div class="service-actions">
<a href="tel:+917499685501" class="contact-btn">Call</a>
<a href="https://wa.me/917499685501" target="_blank" class="whatsapp-btn">WhatsApp</a>
</div>
`;
}

body.innerHTML = content;
modal.style.display="flex";
history.pushState({modalOpen:true},"");
}

function closeService(){
document.getElementById("serviceModal").style.display="none";
}

/* MODAL EVENT LISTENERS */
window.addEventListener("popstate", function(){
const projectModal = document.getElementById("projectModal");
const serviceModal = document.getElementById("serviceModal");
const connectModal = document.getElementById("connectModal");
if(projectModal.style.display === "flex"){
projectModal.style.display = "none";
}
if(serviceModal.style.display === "flex"){
serviceModal.style.display = "none";
}
if(connectModal.style.display === "flex"){
connectModal.style.display = "none";
}
});

window.onclick = function(event){
const projectModal = document.getElementById("projectModal");
const serviceModal = document.getElementById("serviceModal");
const connectModal = document.getElementById("connectModal");
if(event.target === projectModal){
projectModal.style.display = "none";
}
if(event.target === serviceModal){
serviceModal.style.display = "none";
}
if(event.target === connectModal){
connectModal.style.display = "none";
}
};