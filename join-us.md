---
layout: default
permalink: /join-us/
title: join us
---

# Join Us!

Please come and join us!

<form action="https://api.staticforms.xyz/submit" method="post" id="staticform">
<!-- Replace with your StaticForms accessKey -->
    <input type="hidden" name="accessKey" value="63c9d080-83be-48f7-8c02-07219db6e14c">
    <input type="hidden" name="subject" value="Membership Application">
    <!-- Replace with the url you want to redirect to -->
    <input type="hidden" name="redirectTo" value="https://fishingandforaging.se/join-us#submitted">
    <div class="field">
        <label class="label">Name</label>
        <div class="control">
        <input class="input" type="text" name="name" placeholder="Enter Your Name" required>
        </div>
    </div>
    <div class="field">
        <label class="label">Email</label>
        <div class="control">
        <input class="input" type="email" name="email" placeholder="Enter Your Email" required>
        </div>
    </div>
    <div class="field">
        <label class="label">Message</label>
        <div class="control">
        <textarea class="textarea" name="addition information" placeholder="Anything special to say?"></textarea>
        </div>
    </div>
    <button class="button is-primary" type="Submit">Submit</button>
</form>



