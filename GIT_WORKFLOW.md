<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>🔀 Git Branch Workflow — CloudGuard AI</h1>

<h2>📌 Purpose</h2>
<p>This document defines strict Git rules and workflows for the CloudGuard AI group project.</p>

<p>The goal is:</p>
<ul>
<li>Protect the main branch</li>
<li>Allow independent development</li>
<li>Ensure clean integration</li>
<li>Avoid accidental overwrites</li>
</ul>

<h2>🌳 Branch Strategy</h2>
<table border="1">
<thead>
<tr>
<th>Branch Name</th>
<th>Owner</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>main</td>
<td>DevOps Lead (Admin)</td>
<td>Final integrated & stable code</td>
</tr>
<tr>
<td>devops</td>
<td>DevOps Engineer</td>
<td>CI/CD, Kubernetes, Monitoring</td>
</tr>
<tr>
<td>cloud-security</td>
<td>Cloud Security Engineer</td>
<td>AWS security & remediation</td>
</tr>
<tr>
<td>ml-engine</td>
<td>ML Engineer</td>
<td>ML models & APIs</td>
</tr>
<tr>
<td>mern-app</td>
<td>MERN Developer</td>
<td>Frontend + Backend UI</td>
</tr>
</tbody>
</table>

<h2>🚫 MAIN BRANCH RULES (VERY IMPORTANT)</h2>
<ul>
<li>❌ No one pushes directly to main</li>
<li>❌ No development work on main</li>
<li>✅ Only DevOps Lead can merge into main</li>
<li>✅ All merges happen after review</li>
<li>✅ main always stays deployable & clean</li>
</ul>

<p><strong>🔒 Branch protection rules must block direct push to main</strong></p>

<h2>👤 INDIVIDUAL DEVELOPER WORKFLOW (STANDARD)</h2>
<p>Each member works ONLY on their own branch.</p>

<h3>🔹 DevOps Engineer Workflow (devops branch)</h3>
<p>Switch to devops branch</p>
<pre>
git checkout devops
</pre>
<p>Pull latest changes (important)</p>
<pre>
git pull origin devops</pre>

<p>
Work on DevOps files
(jenkins/, kubernetes/, monitoring/, etc.)</p>

<pre>
git add .
git commit -m "Add Jenkins pipeline and Prometheus setup"
git push origin devops
</pre>

<p>✅ Never touch main<br>
✅ Never work on other branches</p>

<h3>🔹 Cloud Security Engineer Workflow (cloud-security branch)</h3>
<pre>
git checkout cloud-security
git pull origin cloud-security

Work on cloud-security/
(Lambda, AWS Config rules, scripts)

git add .
git commit -m "Add S3 public access auto-remediation"
git push origin cloud-security
</pre>

<h3>🔹 ML Engineer Workflow (ml-engine branch)</h3>
<pre>
git checkout ml-engine
git pull origin ml-engine

Work on ml-engine/
(preprocessing, models, APIs)

git add .
git commit -m "Add anomaly detection model"
git push origin ml-engine
</pre>

<h3>🔹 MERN Developer Workflow (mern-app branch)</h3>
<pre>
git checkout mern-app
git pull origin mern-app

Work on mern-app/frontend or backend

git add .
git commit -m "Add login and dashboard UI"
git push origin mern-app
</pre>

<h2>🔁 WHY OTHER BRANCHES SHOW ONLY README.md</h2>

<h3>❓ Problem</h3>
<p>"Other branches only have README.md but main has all folders"</p>

<h3>✅ Explanation</h3>
<p>Branches were created before files existed, so they don't automatically get new files.</p>

<h3>✅ FIX (DO THIS ONCE – ADMIN ONLY)</h3>
<p>From main branch, push structure to all branches:</p>

<pre>
Ensure you're on main
git checkout main
git pull origin main

For each branch
git checkout devops
git merge main
git push origin devops

git checkout cloud-security
git merge main
git push origin cloud-security

git checkout ml-engine
git merge main
git push origin ml-engine

git checkout mern-app
git merge main
git push origin mern-app
</pre>

<p>✔ Now all branches will have full folder structure<br>
✔ Developers can work safely in their folders</p>

<h2>🔀 HOW CODE MOVES TO MAIN (INTEGRATION FLOW)</h2>
<p>Only DevOps Lead does this.</p>

<h3>🧩 Step 1: Review Feature Branch</h3>
<pre>
git checkout main
git pull origin main
</pre>

<h3>🧩 Step 2: Merge Branch (Example: devops)</h3>
<pre>
git merge devops
</pre>
<p>If conflicts appear → resolve → commit.</p>

<h3>🧩 Step 3: Push to Main</h3>
<pre>
git push origin main
</pre>

<h2>🛑 WHAT TEAM MEMBERS MUST NEVER DO</h2>
<ul>
<li>❌ git checkout main</li>
<li>❌ git push origin main</li>
<li>❌ git merge without permission</li>
<li>❌ Work in someone else's branch</li>
</ul>

<p><strong>🔒 Repository Rulesets Enforced:</strong> Only the repository admin can push to main branch or merge code from any branch to main.</p>


<h2>✅ SAFE RULE (REMEMBER THIS)</h2>
<p><strong>One person → One branch → One responsibility</strong></p>

<h2>🧠 ENTERPRISE NOTE (Viva Ready)</h2>
<p><em>"We followed a protected-branch Git workflow where all development happens in isolated feature branches and only the DevOps lead performs controlled merges into the main branch."</em></p>

<h2>🏁 SUMMARY</h2>
<ul>
<li>Main = stable</li>
<li>Branches = independent</li>
<li>You = gatekeeper</li>
<li>Zero chaos</li>
<li>Enterprise-level workflow</li>
</ul>

</body>
</html>
