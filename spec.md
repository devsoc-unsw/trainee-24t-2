# StudyPal: Collaborative Study Platform

## Introduction

StudyPal is intended to make studying fun with friends to compete and
collaborate with. We are more focused on the MVP right now, as some of
our ambitious ideas can be explored later. MVP features include:

- Share notes
- Set milestones
- Track progress and view others' progress
- Timeline provided to chart the efficiency of users

Each of these will be discussed in more detail in the next section.

More ambitious/time-consuming/complimentary features include:

- Incorporating a mentor system of volunteers who wish to educate others.
- Notifications for when friends have completed a milestone

I'm not the lead, but I would encourage exploring the MVP features first. If
we're all free/ambitious/hungry for more we could expand upon our project in
our own time after the presentation.

### Brief mention: Cyber Security and File Uploads

While sharing notes is probably a core feature, we should be wary of file upload
vulnerabilities that could make a few things go boom boom. More info on this later.

## Structure and Functionality

### User Accounts

At the highest level of functionality, upon account creation users should be able to:

- Create a project
- Remove a project
- Delete their account

### Project Creation

Upon creating a project, a user should be able to:

- Define discrete milestones in their own language, AND/OR
- Define quantitative milestones, such as cumulative study time
- Invite registered StudyPal members to the project

### Editing State of Project

A user should be able to make the following changes to an existing project:

- Record their own progress (banking study hours, declaring completion of a milestone)
- Creator of the project should be granted administrative privileges, allowing them to
  - Remove the project
  - Add/remove milestones

### Sharing Notes

- Accepted file types (feel free to add more): .docx, .pptx, .pdf, .txt, .mp3, .mp4, .m4v, ...
- Maximum file size of 32MB (as a starting number; feel free to change this)
- Stored into the backend
- (Optional) input sanitisation, sandboxing for security
  - https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html
