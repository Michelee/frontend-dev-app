import React from "react";
import styles from './ClientsSection.module.css'
import GoogleLogo from '../../assets/images/clients/google.svg'
import LevisLogo from '../../assets/images/clients/levis.svg'
import NetflixLogo from '../../assets/images/clients/netflix.svg'
import SpotifyLogo from '../../assets/images/clients/spotify.svg'
import PatagoniaLogo from '../../assets/images/clients/patagonia.svg'
import FujitsuLogo from '../../assets/images/clients/fujitsu.svg'
import AudiLogo from '../../assets/images/clients/audi.svg'
import AdyenLogo from '../../assets/images/clients/adyen.svg'
import TriumphLogo from '../../assets/images/clients/triumph.svg'
import TeslaLogo from '../../assets/images/clients/tesla.svg'
import AsosLogo from '../../assets/images/clients/asos.svg'
import TakeawayLogo from '../../assets/images/clients/takeaway.svg'

const ClientsSection = () => (
  <div className={styles.clientsSection}>
    <h3>Clients</h3>
    <p>
      We value a great working relationship with our clients above all else.
      It's why they often come to our parties. It's also why we're able to
      challenge and inspire them to reach for the stars.
    </p>
    <div className={styles.brandsLogos}>
      <img src={GoogleLogo} alt="google-logo" />
      <img src={LevisLogo} alt="levis-logo" />
      <img src={NetflixLogo} alt="netflix-logo" />
      <img src={SpotifyLogo} alt="spotify-logo" />
      <img src={PatagoniaLogo} alt="patagonia-logo" />
      <img src={FujitsuLogo} alt="fujitsu-logo" />
      <img src={AdyenLogo} alt="adyen-logo" />
      <img src={AudiLogo} alt="audi-logo" />
      <img src={TakeawayLogo} alt="takeaway-logo" />
      <img src={TeslaLogo} alt="tesla-logo" />
      <img src={TriumphLogo} alt="triump-logo" />
      <img src={AsosLogo} alt="asos-logo" />
    </div>
  </div>
);

export default ClientsSection
