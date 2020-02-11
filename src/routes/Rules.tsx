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

// const rules = [
//   {
//     label: '18-plus-only',
//     iconSrc:
//       'https://images.squarespace-cdn.com/content/v1/56e86bc3746fb97fd1a89e39/1458115713672-VHLML6G8UPU3C7RLVR1Y/ke17ZwdGBToddI8pDm48kATjjHbO0u7YsmshsWDVW4FZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7cf54ar7ioAkmCKAxvko3gxPWD2_Zf5awnkR6C4bwON4sSyY6-ivP3jpH0jzS1sCaw/Our+aim+is+for+SizeCon+to+be+a+place+for+anyone+of+age+%2818%2B%29+to+gather+and+share+their+love+for+size.+Even+with+this+focus%2C+we+want+the+convention+to+be+a+place+that%E2%80%99s+just+as+welcoming+to+friends+and+family%2C+and+really+just+anyone+curious+about+size+in+general.+Most+important+is+that%2C+no+matter+who+shows+up%2C+the+convention+is+a+positive+space+and%2C+of+course%2C+a+whole+lot+of+fun.+The+rules+that+follow+will+help+us+ensure+a+positive+and+welcoming+space.+If+an+attendee+injures+this+atmosphere+at+any+time%2C+in+any+way%2C+SizeCon+staff+reserve+the+right+to+remove+the+attendee+from+the+convention.+Rules+and+Information+SizeCon+volunteer+staff+will+be+visible+on+the+convention+floor+thanks+to+their+special+badges.+Please+do+not+hesitate+to+reach+out+to+our+volunteers+with+any+questions+or+concerns+you+may+have.+SizeCon+attendees+must+wear+their+badge+at+all+times+during+the+convention%2C+or+have+them+ready+to+show+to+staff+if+asked.+That+is+to+say%2C+not+just+anyone+will+be+able+to+wander+into+the+convention%3A+this+is+a+private+space%2C+for+us.+In+general%2C+SizeCon+has+a+non-sexual+atmosphere%2C+with+special+areas+and+attractions+labeled+for+containing+or+allowing+adult+content.+Sexual+discussion+is+welcome+and+encouraged%2C+but+please+be+considerate%3A+outside+of+specially+marked+areas%2C+attendees+will+have+a+visible+flag+on+their+badge+which+notes+the+attendee%E2%80%99s+comfort+level+with+sexual+discussion.+For+many%2C+size+is+a+fetish.+At+SizeCon%2C+we+welcome+that+fetish%2C+as+well+as+the+size+fascinated+in+general.+Verbal+or+physical+harassment+of+any+kind%2C+stalking%2C+and+unwelcome+attention+will+not+be+tolerated.+Any+offending+attendees+may+be+asked+to+separate%2C+or%2C+if+necessary%2C+removed+from+the+convention.+Heinous+offenders+will+be+reported+to+the+police.+Cosplay+is+welcome+and+encouraged+inside+of+the+convention.+However%2C+outside+of+the+convention+doors%2C+such+as+inside+of+the+hosting+hotel%2C+attendees+are+asked+to+adhere+to+what+is+generally+considered+appropriate.+Please+help+us+keep+SizeCon+clean+and+considerate%2C+by+putting+all+your+trash+in+garbage+bins%2C+and+by+keeping+noise+levels+down+outside+of+the+convention+rooms%2C+including+in+hotel+room+parties+during+and+after+SizeCon.?format=300w',
//     msg: (
//       <>
//         Due to some of the material being sold at the convention, and the
//         subject matter of some of our panels,{' '}
//         <strong>SIZECON IS AN 18+ ONLY EVENT</strong>. However, SizeCon is not a
//         strictly sexual event: anyone who loves size is welcome!
//       </>
//     ),
//   },
//   {
//     label: 'judge-free',
//     iconSrc:
//       'https://images.squarespace-cdn.com/content/v1/56e86bc3746fb97fd1a89e39/1458115902315-KHFRRI8ZXQN1S2MSCU26/ke17ZwdGBToddI8pDm48kKAF85-Ra3izq36AdzLNBvtZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Wt5K3jmsiBpJAJjNxwpFT669VgN_RSjAohC6PfG0VdZLTEbt3C1shPi4w33kx3aEg/image-asset.png?format=300w',
//     msg: (
//       <>
//         SizeCon is a <strong>JUDGE FREE</strong> space. We are male, female,
//         gender-queer, LGBTQ, furry, lovers of fluffy and cruel fantasies alike.
//         It doesn’t matter who or how we love, but what we love: our common size
//         fascination is what’s bringing us all together.
//       </>
//     ),
//   },
//   {
//     label: 'zero-tolerance',
//     iconSrc:
//       'https://images.squarespace-cdn.com/content/v1/56e86bc3746fb97fd1a89e39/1458115827707-COZHYX0WDZIOZT0DROAK/ke17ZwdGBToddI8pDm48kKAF85-Ra3izq36AdzLNBvtZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Wt5K3jmsiBpJAJjNxwpFT669VgN_RSjAohC6PfG0VdZLTEbt3C1shPi4w33kx3aEg/image-asset.png?format=300w',
//     msg: (
//       <>
//         SizeCon has a <strong>ZERO TOLERANCE POLICY</strong> for harassment of
//         any kind. To make sure all guests are comfortable during the event we
//         will have security present at all times.
//       </>
//     ),
//   },
//   {
//     label: 'stay-connected',
//     iconSrc:
//       'https://images.squarespace-cdn.com/content/v1/56e86bc3746fb97fd1a89e39/1458116270946-AI89JY5W5QFPBRQ1PGCL/ke17ZwdGBToddI8pDm48kKAF85-Ra3izq36AdzLNBvtZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Wt5K3jmsiBpJAJjNxwpFT669VgN_RSjAohC6PfG0VdZLTEbt3C1shPi4w33kx3aEg/image-asset.png?format=300w',
//     msg: (
//       <>
//         <strong>STAY CONNECTED!</strong> Follow us on social media to get all
//         the latest news!
//       </>
//     ),
//   },
// ];

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
      {/* {rules.map(rule => (
        <div className="my-4" key={rule.label}>
          <img
            className="w-4/6 p-4 mx-auto"
            src={rule.iconSrc}
            alt={rule.label}
          />
          <p className="p-2">{rule.msg}</p>
        </div>
      ))} */}
      {/* <hr className="w-11/12 mx-auto my-6 border-green-800" /> */}
      {/* <h2 className="my-2 text-2xl text-center">
        Code of Conduct & Guidelines for Encouraged Behavior
      </h2> */}
      {/* <p className="p-2">
        SizeCon is committed to providing a space that feels as safe and
        inclusive as reasonably possible. We recognize that attendees come from
        a variety of different backgrounds and that social expectations vary
        from community to community. We hope that these issues will not emerge
        during the course of the convention. We assume the best of intentions in
        our participants unless presented with information that suggests
        otherwise. In these cases, the convention staff will not hesitate to
        take action based upon the below Code of Conduct.
      </p>
      <h3 className="my-2 text-xl text-center text-gray-700">
        Code of Conduct
      </h3>
      <p className="p-2">
        As a private event, SizeCon can sanction or remove attendees for any
        reason. This policy aims to provide clear and reasonable guidelines for
        expected behavior at the event and possible consequences if an
        individual transgresses against these guidelines. The consequences for
        breaking the Code of Conduct range from verbal warnings to ejection from
        the conference and associated online communities, as detailed below.
      </p>
      <p className="p-2">
        We understand that at times, our attendees will have disagreements or
        interpersonal conflicts that do not necessarily escalate to the point of
        harassment or abuse. SizeCon will not arbitrate these sorts of feuds.
        If, however, conflicts escalate to the point that they 1) threaten
        attendee safety, or 2) violate our Code of Conduct at the convention
        (example: racist or sexist language), the event staff may become
        involved. If you are unsure as to how something may be viewed, err on
        the side of caution and respect.
      </p>
      <p className="p-2">
        Each complaint received by the convention is evaluated on a case-by-case
        basis based upon the evidence presented, existing information about the
        participants in question, and ultimately, the judgment of the members of
        the security team and convention leadership.
      </p>
      <h3 className="my-2 text-xl text-center text-gray-700">Harrasment</h3>
      <p className="p-2">For our purposes, harassment includes:</p>
      <p className="p-2">
        Verbal comments or displayed images that denigrate individuals based
        upon gender, gender identity/expression, sexual orientation, disability,
        physical appearance, body size, race, age, religion, political beliefs,
        philosophies, geographic origin, or socioeconomic status;
      </p>
      <p className="p-2">
        Physical or verbal intimidation or any other behavior that reasonable
        individuals would view as abusive;
      </p>
      <p className="p-2">
        Loud arguments that move beyond the expectations of polite discourse;
        Stalking;
      </p>
      <p className="p-2">Non-consensual photography or recording;</p>

      <p className="p-2">Sustained disruption of activities or other events;</p>

      <p className="p-2">Inappropriate physical contact or proximity;</p>

      <p className="p-2">Non-consensual physical or emotional interactions;</p>

      <p className="p-2">
        Unwelcome sexual attention, whether verbal or physical.
      </p>

      <p className="p-2">
        This harassment policy applies to both in-person and online activities.
        Participants asked to stop any harassing behavior are expected to comply
        immediately. SizeCon volunteers and staff are also subject to the
        anti-harassment policy.
      </p>

      <p className="p-2">
        Please note that while SizeCon’s commitment to fostering diversity aims
        to protect members of historically marginalized groups, the committee
        does not approve of blatant sexism or racism toward any group, including
        individuals from positions of historical power. The goal of our
        conference is to foster good will and shared insights among all groups
        rather than alienating individuals from one another. While political and
        societal discussions are allowed, overly generalizing the perspectives
        of attendees or leveling individual accusations toward someone based
        upon race, gender, or class are not appropriate.
      </p>
      <h3 className="my-2 text-xl text-center text-gray-700">
        SizeCon Seatbelts Policy
      </h3>
      <p className="p-2">
        We at SizeCon recognize that bad players in kink communities sometimes
        find themselves drawn to positions of power, in order to take advantage
        of those they would wield that power over. In the interest of
        discouraging such players from volunteering with our convention, we
        strongly advise that our volunteers refrain from making any sort of
        intimate advance (romantic, sexual, initiative of play, or otherwise)
        toward attendees of SizeCon, where such a previous relationship does not
        exist. In contrast, if an attendee initiates an advance toward a member
        of staff and makes it explicitly clear that it's an advance, volunteers
        are allowed to reciprocate.
      </p>
      <h3 className="my-2 text-xl text-center text-gray-700">
        Reporting Harrasment
      </h3>
      <p className="p-2">
        The conference will provide members of the event staff detailed
        instructions and training procedures in case of a violation or
        emergency. Attendees can report harassment at any time:
      </p>
      <p className="p-2">
        Before the event: If you are privy to information about harassment
        toward yourself or someone else by someone in the community at large,
        whether or not they plan openly to attend SizeCon, please email us at{' '}
        <a className="text-green-600" href="mailto:production@sizecon.com">
          production@sizecon.com
        </a>
        . As registration is private, this information may prove important
        later. Please include as many details as possible, though you may choose
        to remove the identities of the alleged victims if a concern for
        retribution is present. These messages will remain confidential, known
        only to the organizers of the convention and our security staff. Reports
        received about registered attendees before the event are subject to the
        same consequences as those received during the conference.
      </p>
      <h3 className="my-2 text-xl text-center text-gray-700">What to Expect</h3>
      <p className="p-2">
        Our aim is for SizeCon to be a place for anyone of age (18+) to gather
        and share their love for size. Even with this focus, we want the
        convention to be a place that’s just as welcoming to open-minded friends
        and family, and really just anyone curious about size in general. Most
        important is that, no matter who shows up, the convention is a positive
        space and, of course, a whole lot of fun!
      </p>
      <p className="p-2">
        We strive to provide attendees with a safe environment at SizeCon and
        have trained staff and security on site. Please do not hesitate to reach
        out to our staff with any questions or concerns you may have! SizeCon
        attendees must wear their badge at all times during the convention, or
        have them ready to show to staff if asked. That is to say, not just
        anyone will be able to wander into the convention: this is a private
        space, for us.
      </p>
      <p className="p-2">
        Cosplay is welcome and encouraged inside of the convention. However,
        outside of the convention doors, such as inside of the hosting hotel,
        attendees are asked to adhere to what is generally considered
        appropriate. Please refrain from bringing costumes or masks that may
        scare or intimidate guests. Please help us keep SizeCon clean and
        considerate, by putting all your trash in garbage bins, and by keeping
        noise levels down outside of the convention rooms, including in hotel
        room parties during and after SizeCon.
      </p>
      <p className="p-2">
        In general, SizeCon has a non-sexual atmosphere, with special areas and
        attractions labeled for containing or allowing adult content. Sexual
        discussion is welcome and encouraged, but please be considerate:
        attendees will have a visible flag on their badge which notes the
        attendee’s comfort level with sexual discussion. For many, size is a
        fetish. At SizeCon, we celebrate that fetish but want to keep the
        comfort of the size fascinated in general in mind as well.{' '}
      </p>
      <h3 className="my-2 text-xl text-center text-gray-700">
        SizeCon Photo & Video Policy
      </h3>
      <p className="p-2">
        Every attendee will receive a neon-green, round sticker to cover their
        phone cameras. Photos <strong>are allowed with restrictions</strong>{' '}
        while videos taken by attendees on the convention floor are{' '}
        <strong>strictly prohibited</strong>. Camera stickers can only be
        removed if you have received consent to take a photo. The sticker must
        conceal the attendees camera after the photo; if you lose this sticker,
        please ask for a replacement at the SizeCon Check-in booth near the
        entrance of the con space.
      </p>
      <p className="p-2">
        Here at SizeCon, we adhere to a strict{' '}
        <strong>consent-only photo policy</strong> and use disposable,
        neon-green wristbands in order to designate how said consent should be
        obtained by fellow attendees. During check-in, attendees will be asked
        if they are comfortable with having their picture taken by others.
        Wearing a wristband means that the attendee is open to{' '}
        <strong>being asked</strong> for their consent to be in photos. If an
        attendee is not wearing a wristband, this means that they{' '}
        <strong>are not</strong> to be asked to be in a photo. Please respect
        their right to privacy. Breaking this very important rule will result in
        a permanent ban from SizeCon and possible escalation with local
        authorities if needed.{' '}
      </p>
      <p className="p-2">
        Many of our attendees want photos as a memento of their time at SizeCon,
        but also highly value their privacy. To accommodate our attendees and
        discourage photos being taken, we will again have our Official SizeCon
        Photographer on staff taking pictures of the event space, events,
        decorations, shops, and of course our neon-green wristbanded attendees.
        If you do not have a wristband, you will not have your photo taken,
        period. Attendees are allowed to adjust their level of consent at any
        time; if they choose retroactively that they don’t want photos of
        themselves circulated while attending, then it’s on the attendee to seek
        out their photographers and actively revoke said consent.
      </p> */}
    </div>
  );
};

export default Rules;
