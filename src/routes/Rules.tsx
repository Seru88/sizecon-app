import React from 'react';
import classed from 'classed-components';
import badge_example from '../assets/badge-example.jpeg'

const H3 = classed('h3')`
  my-2
  text-xl
  text-gray-700
  font-bold
`;

const P = classed('p')`
  mb-8
`;

const Rules: React.FC = () => {
  return (
    <div>
      {/* <h2 className="my-2 text-2xl text-center">Rules and Information</h2> */}
      <H3>SIZECON IS A KINKY PLACE</H3>
      <P>
        SizeCon is largely an adult convention, open to anyone ages 18 and
        older.
      </P>
      <H3>PLEASE BE CONSIDERATE OF THE HOTEL AND ITS GUESTS</H3>
      <P>
        Please help us keep SizeCon clean and considerate, by putting all your
        trash in garbage bins, and by keeping noise levels down outside of the
        convention rooms, including in hotel room parties during and after
        SizeCon.
      </P>
      <H3>PLEASE RESPECT BOUNDARIES OUTSIDE THE CON FLOOR</H3>
      <P>
        Outside of the convention doors, we ask our attendees to adhere to what
        is generally considered appropriate in terms of dress. Please refrain
        from bringing costumes or masks that may scare or intimidate guests.{' '}
      </P>
      <H3>PLEASE RESPECT BOUNDARIES ON THE CON FLOOR</H3>
      <P>
        Badges will be marked to distinguish whether given attendees are
        comfortable with adult content and discussions. Please be considerate of
        attendees unwilling to discuss in such a manner!
      </P>
      <p>
        Below is an example of a badge:
      </p>
      <div className="w-full p-1 mb-8">
        <img width="100%" height="auto" src={badge_example} alt="badge-example"/>
      </div>
      <H3>NO PHOTOS OR VIDEOS ON THE CON FLOOR</H3>
      <P>
        Attendees are asked to apply stickers to their phone cameras while
        enjoying the convention. We have an official photographer who is allowed
        to take photos with consent; informal consent on the part of attendees
        is indicated by wristbands that will be handed out at the check-in desk.
        NO KINKSHAMING: SizeCon is a JUDGE-FREE space. We’re inclusive of all
        manner of gender identity, sexual orientation (or lack thereof), and
        kink: size-kink, furry-kink, fluffy and cruel fantasies, and so on. It
        doesn’t matter who or how we love, but what we love: our common size
        fascination is what’s bringing us all together.
      </P>
      <H3>NO HARASSMENT</H3>
      <P>
        We have a zero-tolerance policy for harassment, conducted by attendees
        and staff alike, which can include but is not limited to: unwelcome
        and/or hostile verbal or physical interactions; derogatory remarks
        grounded in discrimination against race, sex, gender identity, or other
        perceived belonging to a category, class, or group; nonconsensual
        recordings; or otherwise. Security is present at all times, and
        empowered to expel harassing parties from the convention and its related
        online spaces.
      </P>
      <H3>PLEASE REPORT TO STAFF IF YOU FIND YOURSELF BEING HARASSED</H3>
      <P>
        We’re interested in keeping our attendees safe and our atmosphere
        pleasant. If another attendee disrupts your experience enough to make
        you reconsider coming to our convention, please feel free to submit a
        report at any time, whether over email, in-person, via our Discord
        server, and so on.
      </P>
      <H3>PLEASE COMPLY WITH STOP REQUESTS</H3>
      <P>
        If a member of staff asks you to stop doing something potentially
        disruptive, please stop doing it.
      </P>
      <H3>WE VALUE YOUR TRUST</H3>
      <P>
        We advise our staff to refrain from making advances on attendees
        (intimate, romantic, or otherwise) while they are performing duties as
        staff, where such a relationship does not previously exist. This is to
        avoid the exploitation, unwitting or not, of the power dynamic between
        staff and attendees in a kink convention space.
      </P>
    </div>
  );
};

export default Rules;
