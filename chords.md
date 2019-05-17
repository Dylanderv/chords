# Chords

Chords permet de visualiser les accords d'un instrument (Piano au début)

## Fonctionnement

À partir d'un fichier json contenant les accords, Chords va générer une vue pour le visualiser  


```json
{
  "pianoChords": [
    {
      "name": "DO Majeur",
      "keys": [
        {"name": "DO"},
        ...
      ]
    }
  ],
  "ukuleleChords": [
    {
      "name": "DO Majeur",
      "keys": [
        {
          "name": "DO",
          "case": 0,
          "mutted": false
        },
        ...
      ]
    }
  ]
}
```

`key` doit être une note de musique jouable sur l'instrument

### Affichage

L'affichage des note sa fait par écrit (liste touches/cordes)

Génération d'une image pour chaque accords (est-ce seulement possible ?)

