import React, {useState} from 'react';

/** Simple dé facultatif : le texte de la table reste lisible en version imprimée. */
export default function TravelDie(): React.JSX.Element {
  const [roll, setRoll] = useState<number | null>(null);
  return (
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem'}}>
      <button type="button" className="button button--primary" onClick={() => setRoll(Math.floor(Math.random() * 6) + 1)}>
        Lancer 1d6
      </button>
      {roll !== null && <p aria-live="polite" style={{marginTop: '1rem'}}>Résultat : <strong>{roll}</strong>. Consultez la table imprimable ci-dessous.</p>}
    </div>
  );
}
