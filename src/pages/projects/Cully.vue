<template>
  <layout>
    <div class="container">
      <h2 class="margin-bottom-sm">Cully: Facebook Messenger Movie Bot</h2>
      <div class="columns-2">
        <div>
          <h4>Project Summary</h4>
          <p>The Cully project is a government funded innovation project for us to create a product that uses newer technology to innovate. I joined the project in the early stages at that time we were making a chatbot that recommended events to people based on their interests. The first release of the chatbot was specifically for finding interesting events in your city (beta only had Toronto and Vancouver). This gave us some experience with launching a bot on Facebook Messenger and getting some initial usability and product feedback. It also helped me define what was working and not working in my design process.</p>
          <p>Once we got our first chatbot out of the door we began to pivot our focus to the movie theatre industry. We saw an opportunity to help simplify the ticket buying process and provide an easier guided experience for moviegoers.</p>
        </div>
        <div>
          <h4>My Role</h4>
          <p>Product Design, Product Management</p>

          <h4>The Team</h4>
          <p>1 Senior Developer, 1 Intermediate Developer</p>

          <h4>Tools I Used</h4>
          <p>Sketch, Sketch Plugin: User Flows, InvisionApp, GitHub, Dialogflow, ChatFuel</p>
        </div>
      </div>

      <g-image src="../../assets/images/projects/cully/cully-1.png" class="fluid rounded-corners" alt></g-image>

      <div class="margin-top-lg margin-bottom-lg" style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          src="https://player.vimeo.com/video/261362461?title=0&byline=0&portrait=0"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>

      <p
        class="lead"
      >Above is an example of our movie theatre chatbot experience. We’re still testing and making changes as we go but so far the response from our testers and partners has been very positive. For certain tasks, people seem to really appreciate the use of a chatbot. We started using Google’s Dialog Flow to create a better chat experience that leverages natural language processing. Using this technology will allow us to easily take our bot to the next level using voice assistants such as Google Home and Alexa.</p>

      <div class="columns-2 margin-bottom-lg margin-top-lg">
        <g-image src="../../assets/images/projects/cully/cully-2.png" class="fluid rounded-corners" alt></g-image>
        <div>
          <p
            class="lead"
          >There were lots of differences working with bots vs working With web applications but I still feel like most of my UX knowledge transcended the medium. The main parts of my workflow that I had to adapt to in this new scenario were IA documentation and prototypes. Instead of using traditional sitemap documents I relied heavily on mapping out the flows and showing snippets of the conversations. This gave the team a really clear understanding of what we needed to build and how each decision would affect the flow.</p>
          <p
            class="lead"
          >Prototyping was the other area I needed to make some changes to. No longer could I create an HTML prototype or stitch together some screens within InvisionApp. I needed to be able to preview exactly how the experience would be for the end users. This is where I found ChatFuel to be extremely useful. Chatfuel turned out to be a great prototyping tool where I could build actual flows in their software and push them to my Facebook Messenger test account. Instantly my chat prototypes were pushed out to Messenger and I could interact with them exactly as an end user would with our final product.</p>
        </div>
      </div>

      <div class="columns-2">
        <g-image
          src="../../assets/images/projects/cully/cully-3.png"
          class="fluid rounded-corners hidden-sm"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/cully/cully-4.png"
          class="fluid rounded-corners hidden-sm"
          alt
        ></g-image>
        <g-image src="../../assets/images/projects/cully/cully-5.png" class="fluid rounded-corners" alt></g-image>
        <div>
          <p>
            If you would like to learn more about this research you can checkout the
            <a
              href="https://medium.com/cully-bot/messaging-event-survey-results-d0984bb064eb"
              target="_blank"
            >full blog post here</a>.
          </p>
          <p>Some of the tools I used to conduct research for this project were:</p>
          <p>
            <span class="is-bold">Paid Surveys:</span> we used Google surveys to conduct some preliminary quantitative research. This helped with getting a grasp on the general publics' knowledge of chatbots and which chat platforms they used most.
          </p>

          <p>
            <span class="is-bold">Free Surveys:</span> Similar to the above except we reached out to our network and had a chance to have more of a dialog with them.
          </p>

          <p>
            <span class="is-bold">Post Use Survey:</span> Once people tried out the bot for a few days we followed up with a survey asking them about their experience.
          </p>
          <p>
            <span class="is-bold">Session Reviews:</span> Since we can see and read all of the conversations we had a great opportunity to analyze the conversations and find any stumbling points our users were facing.
          </p>
        </div>
      </div>

      <g-image src="../../assets/images/projects/cully/cully-6.png" class="fluid rounded-corners" alt></g-image>

      <p
        class="lead"
      >This is a sample of how we tackled seating selection. Instead of opening another web UI for the user we managed to keep them within Messenger but placing a variety of seating options within a carousel (Messenger UI). The user could see a variety of seating options and select the plan that works best for them.</p>

      <p
        class="lead"
      >Unfortunately, I cannot dive into too much detail about how we’re productizing our chat platform. However, we are working with an international partner that will be white-labeling our solution and helping sell it to theatre chains all over the world.</p>
    </div>
  </layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Cully Chatbot UX/UI Design',
    meta: [
      { name: 'author', content: 'Jesse Johnston' }
    ]
  }
};
</script>
<style lang="scss" scoped>
</style>
