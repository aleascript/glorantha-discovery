import React, {useState} from 'react';

const outcomes = [
  'Le voyage se poursuit sans incident remarquable.',
  'Le voyage se poursuit sans incident remarquable.',
  'Des voyageurs commercent et échangent des nouvelles. Que racontent-ils de ce territoire ?',
  'Une patrouille demande où vous allez et de quel droit vous traversez ces terres. Sa nature dépendra de la période retenue.',
  'Des habitants du lieu réclament les formes d’accueil ou de passage qui leur sont dues.',
  'Le temps se dégrade et oblige à reconsidérer le rythme ou le chemin.'
];

export default function TravelDie(): React.JSX.Element {
  const [roll, setRoll] = useState<number | null>(null);
  return (
    <div style={{border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem'}}>
      <p><strong>Test de voyage : 1d6</strong> — table expérimentale, non canonique.</p>
      <button type="button" className="button button--primary" onClick={() => setRoll(Math.floor(Math.random() * 6) + 1)}>
        Lancer 1d6
      </button>
      {roll !== null && <p aria-live="polite" style={{marginTop: '1rem'}}><strong>Résultat {roll} :</strong> {outcomes[roll-1]}</p>}
    </div>
  );
}
