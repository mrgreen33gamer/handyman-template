// PageComponents/AboutStory/AboutStory.tsx
import styles from './styles.module.scss';

interface AboutStoryProps {
  cityName: string;
}

const AboutStory: React.FC<AboutStoryProps> = ({ cityName }) => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>

        <div className={styles.labelRow}>
          <span className={styles.label}>Our Story</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        <h2 className={styles.storyTitle}>
          A Local Company Built on<br />
          <span className={styles.highlight}>Honest Work & Fair Prices</span>
        </h2>

        <div className={styles.storyBody}>
          <div className={styles.storyPull}>
            <p className={styles.pullQuote}>
              &quot;We started RightFix because homeowners were tired of waiting weeks for simple repairs — or getting overcharged for work that should be straightforward.&quot;
            </p>
            <div className={styles.pullAttrib}>
              <span className={styles.pullName}>— Sam Ortiz</span>
              <span className={styles.pullTitle}>Founder, RightFix Handyman</span>
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.storyParagraph}>
              Founded in 2015 in Waco, TX, RightFix Handyman started with one truck and one principle:
              give homeowners the straight story about their repairs, charge a fair price, and back the
              work with a real warranty. No hourly billing surprises, no upsell pressure, no contracts.
            </p>
            <p className={styles.storyParagraph}>
              Today we proudly serve <strong>{cityName}</strong> and every surrounding community —
              from China Spring to Killeen — with a crew of background-checked pros
              who live and work right here in Central Texas.
            </p>

            <div className={styles.milestones}>
              {[
                { year: '2015', label: 'Founded in Waco' },
                { year: '2018', label: 'Expanded crew' },
                { year: '2021', label: '5,000 jobs completed' },
                { year: '2026', label: '9,000+ jobs completed' },
              ].map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <span className={styles.milestoneLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutStory;
