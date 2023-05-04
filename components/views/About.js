import html from "html-literal";
import eggPic from "../../assets/img/pexels-anna-shvets-4045568.jpg";

export default () => html`
  <section id="bio">
    <h2 id="abouthead">EggBuddy launches in the spring of 2023</h2>
    <img src="${eggPic}" alt="picture of eggs" />
<div class="about">
    <p>
      EggBuddy is the brainchild of Drew Hansen. Drew loves eggs but was sad
      one day when he went to his local Costco &#8482; and there were NONE in
      stock! Flabbergasted, he went to the other Coscto &#8482; in town, and they
      too were out of eggs. He was forced to make a mad dash around town trying
      to find affordable eggs to feed his egg habit.

    </p>
    <p>
      Savvy Coders taught Drew the necessary skills needed to build an app that
      would solve the predicament Drew found himself in that fateful day. That app is
      <strong>EggBuddy.</strong> EggBuddy is an app that will find you the eggs. Put in
      your zip code and within seconds EggBuddy returns you the results you are looking for.
      It sends you back a list of nearby places to get eggs, and reports the prices per dozen
      too so you can decide where you want to shop.
    </p>
    <p>
</div>

  </section>
`;
