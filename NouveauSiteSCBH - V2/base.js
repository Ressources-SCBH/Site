var base = [
    {'id' : '101', 'nom' : 'Code des marchés publics', 'url' : 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000037695219', 'type' : 'pdf'},
    {'id' : '101', 'nom' : 'Code de la commande publique 2019-2020', 'url' : 'http://www.marche-public.fr/Code-commande-publique-ccp.htm', 'type' : 'html'},
    {'id' : '102', 'nom' : 'Permis de construire', 'url' : 'https://www.service-public.fr/particuliers/vosdroits/F1986', 'type' : 'html'},
    {'id' : '102', 'nom' : 'Déclaration préalable de travaux', 'url' : 'https://www.service-public.fr/particuliers/vosdroits/F17578', 'type' : 'html'},
    {'id' : '102', 'nom' : 'Certificat d\'urbanisme', 'url' : 'https://www.service-public.fr/particuliers/vosdroits/F1633', 'type' : 'html'},
    {'id' : '102', 'nom' : 'Autorisation de l\'Architecte des Bâtiments de France', 'url' : 'https://www.culture.gouv.fr/Sites-thematiques/Monuments-historiques/Travaux-sur-un-objet-un-immeuble-un-espace/Realiser-des-travaux-en-abords-d-un-monument-historique', 'type' : 'html'},
    {'id' : '102', 'nom' : 'Permis de démolir', 'url' : 'https://www.service-public.fr/particuliers/vosdroits/F17669', 'type' : 'html'},
    {'id' : '102', 'nom' : 'Déclaration d\'ouverture de chantier', 'url' : 'https://www.service-public.fr/particuliers/vosdroits/F1992', 'type' : 'html'},
    {'id' : '102', 'nom' : 'Déclaration d\'Achèvement et de Conformité des Travaux (DACT)', 'url' : 'https://www.service-public.fr/particuliers/vosdroits/F1997', 'type' : 'html'},
    {'id' : '102', 'nom' : 'Autorisations d\'urbanisme - Site service public', 'url' : 'https://www.service-public.fr/particuliers/vosdroits/N319', 'type' : 'html'},
    {'id' : '103', 'nom' : 'Exemple de CCTG (Cahier des Clauses Techniques Générales)', 'url' : 'https://drive.google.com/open?id=1NsVTHUneWf5nZCiiQn8fBXreFsBAJNoB', 'type' : 'pdf'},
    {'id' : '103', 'nom' : 'Exemple de mémoire technique', 'url' : 'https://drive.google.com/open?id=12HIEARYPHUSLlA8OrzPPEh-ROTGJVGbr', 'type' : 'html'},
    {'id' : '201', 'nom' : 'Lecture des plans de bâtiment', 'url' : 'https://drive.google.com/open?id=1JUgWsINtqnpRnrRAQhEtMfBMx6RE-Ida', 'type' : 'pdf'},
    {'id' : '201', 'nom' : 'Nouvelle surface de plancher', 'url' : 'https://drive.google.com/open?id=1sDnz6OTRwKIog-kFmCiwrSE9st2PDnVt', 'type' : 'pdf'},
    {'id' : '202', 'nom' : 'Les fondations', 'url' : 'https://drive.google.com/open?id=1mD4lvEmH5hKntBLNuPk0DlFIuJI8mx2K', 'type' : 'html'},
    {'id' : '202', 'nom' : 'Réception des ouvrages de maçonnerie', 'url' : 'https://drive.google.com/open?id=1PIwakvEkXnHFD__bmHoApCojKW5lpqNB', 'type' : 'pdf'},
    {'id' : '202', 'nom' : 'Les fondations en 3D d\'une maison individuelle', 'url' : 'https://www.youtube.com/watch?v=_A6qbihsbyY', 'type' : 'mov'},
    {'id' : '203', 'nom' : 'Les eaux pluviales', 'url' : 'https://drive.google.com/open?id=1hP8B7bUn4YxtlbBGqBHhPChTJErHFmGH', 'type' : 'pdf'},
    {'id' : '204', 'nom' : 'Les menuiseries', 'url' : 'https://drive.google.com/open?id=1YrNiGNKfTGDbBKE8CE6T_pAcc5A1Ibep', 'type' : 'pdf'},
    {'id' : '301', 'nom' : 'Le diagramme de Gantt', 'url' : 'https://drive.google.com/open?id=11lXee_17rlcUNFE_OCOiPFiGqzZBialN', 'type' : 'pdf'},
    {'id' : '302', 'nom' : 'Le compte prorata', 'url' : 'https://drive.google.com/open?id=1001ABi7QVcEWnN65wuvx8azNjOrOziuE', 'type' : 'pdf'},
    {'id' : '302', 'nom' : 'Installation de chantier', 'url' : 'https://drive.google.com/open?id=1AcE5wQvJ8KdAZUjPiLJD5FIyBJ6tTr6A', 'type' : 'pdf'},
    {'id' : '302', 'nom' : 'Montage d\'une maison ossature bois', 'url' : 'https://www.youtube.com/watch?v=A10Hy28E98k', 'type' : 'mov'},
    {'id' : '302', 'nom' : 'Montage d\'une maison ossature bois', 'url' : 'https://www.youtube.com/watch?v=eMxId4kcDIw', 'type' : 'mov'},
    {'id' : '303', 'nom' : 'Réception des ouvrages de maçonnerie', 'url' : 'https://drive.google.com/open?id=1PIwakvEkXnHFD__bmHoApCojKW5lpqNB', 'type' : 'pdf'},
    {'id' : '303', 'nom' : 'Fiche de réception des ouvrages de maçonnerie', 'url' : 'https://drive.google.com/open?id=1j4YRI8G2tnlWkokJtbG5FSPewZ7rR29m', 'type' : 'pdf'},
    {'id' : '303', 'nom' : 'Choix d\'un engin de levage', 'url' : 'https://drive.google.com/open?id=1Ac7StjzGEGmltq71TvX3jNi8LMuyJJb1', 'type' : 'pdf'},
    {'id' : '303', 'nom' : 'Mémento de l\'élingueur (INRS)', 'url' : 'https://drive.google.com/open?id=1XkK9QcO2Q8zkK4Z8qc7NCAO7wNvat9r_', 'type' : 'pdf'},
    {'id' : '304', 'nom' : 'Chantiers respectueux de l\'environnement', 'url' : 'http://www.chantiervert.fr/index.php', 'type' : 'html'},
    {'id' : '401', 'nom' : 'La charpente - Généralités', 'url' : 'https://drive.google.com/open?id=1kNs5mi4u2Po2kb_FqZSYbJf1Le0oihlw', 'type' : 'pdf'},
    {'id' : '401', 'nom' : 'La charpente - Terminologie', 'url' : 'https://drive.google.com/open?id=1BWiWshIB0hckrxVlVyIJOhtYx5AX58AW', 'type' : 'pdf'},
    {'id' : '401', 'nom' : 'DTU 31.1 - Escaliers et charpente bois - Partie 1', 'url' : 'https://drive.google.com/open?id=1Xkl4BFVg7yrCY8-NjTXWgzOhfelB6jDW', 'type' : 'pdf'},
    {'id' : '402', 'nom' : 'Les angles d\'arêtiers', 'url' : 'https://drive.google.com/open?id=11yRHXqCMKfUchQEa9gMPA8l_z27Q5RH1', 'type' : 'pdf'},
    {'id' : '402', 'nom' : 'Les angles de noues', 'url' : 'https://drive.google.com/open?id=1c3VxO5JELeTqjZgcHVmuOzGOqJF8p8wH', 'type' : 'pdf'},
    {'id' : '402', 'nom' : 'Les angles de pannes', 'url' : 'https://drive.google.com/open?id=1d-A4rEJgpPVXfPKCeMetqmQs2Z-qEzwG', 'type' : 'pdf'},
    {'id' : '402', 'nom' : 'Les angles d\'empannons', 'url' : 'https://drive.google.com/open?id=11uq5qd8ngDNtmUHQZwRVRtETQhOW1lgJ', 'type' : 'pdf'},
    {'id' : '403', 'nom' : 'Les assemblages de charpente', 'url' : 'https://drive.google.com/open?id=1c52KbIcoaMhMhzYCLzSgLEWr1jxdE5No', 'type' : 'pdf'},
    {'id' : '403', 'nom' : 'Les lucarnes', 'url' : 'https://drive.google.com/open?id=1b-K3jsN2HugYnZoIF9MYzmn9Euz4t5pX', 'type' : 'pdf'},
    {'id' : '404', 'nom' : 'La charpente industrielle', 'url' : 'https://drive.google.com/open?id=1AWthGX2AJXXtwM9mRCyHoqAlhAyGClJY', 'type' : 'pdf'},
    {'id' : '405', 'nom' : 'Le lamellé collé', 'url' : 'https://drive.google.com/open?id=1lYjHX5ac2EAeKdP9i5wU_cgtn6-ZCORP', 'type' : 'pdf'},
    {'id' : '405', 'nom' : 'Le bois lamellé collé - Assemblages', 'url' : 'https://drive.google.com/open?id=1aL3gIEVRc-A3vlBJOKqTfSV5gAdsGn7A', 'type' : 'pdf'},
    {'id' : '405', 'nom' : 'Stabilité des bâtiments', 'url' : 'https://drive.google.com/open?id=1IQX7ChCYNSHT3y3S6T4KUFSHD1X3IlTu', 'type' : 'pdf'},
    {'id' : '405', 'nom' : 'Mathis - Fabricant de lamellé collé', 'url' : 'https://www.youtube.com/watch?v=ODF2vm1BPiQ', 'type' : 'mov'},
    {'id' : '405', 'nom' : 'Exemple de levage bâtiment Lamellé collé', 'url' : 'https://www.youtube.com/watch?v=GHw4iw4W4aw', 'type' : 'mov'},
    {'id' : '501', 'nom' : 'DTU 31.1 - Escaliers et charpente bois - Partie 1', 'url' : 'https://drive.google.com/open?id=1Xkl4BFVg7yrCY8-NjTXWgzOhfelB6jDW', 'type' : 'pdf'},
    {'id' : '701', 'nom' : 'La dégauchisseuse', 'url' : 'https://drive.google.com/open?id=1gKAgkTGqETe2UELQaaDd3v_GjyXOTs3n', 'type' : 'pdf'},
    {'id' : '701', 'nom' : 'La raboteuse', 'url' : 'https://drive.google.com/open?id=1-exY-FR9tIQtEva2viwDZBTFckE31rug', 'type' : 'pdf'},
    {'id' : '702', 'nom' : 'La coupe du bois', 'url' : 'https://drive.google.com/open?id=1a1nExEtny9TJ7qYyMGyXo_gEmPnR2bHL', 'type' : 'pdf'},
    {'id' : '703', 'nom' : 'Le diagramme de Gantt', 'url' : 'https://drive.google.com/open?id=11lXee_17rlcUNFE_OCOiPFiGqzZBialN', 'type' : 'pdf'},
    {'id' : '703', 'nom' : 'Le lissage de charge', 'url' : 'https://drive.google.com/open?id=1inWn94i1jOA1GDC4s8kk5Op3kUrKhul1', 'type' : 'pdf'},
    {'id' : '901', 'nom' : 'Classement des bois', 'url' : 'https://drive.google.com/open?id=1MGDAQzcrMlrXHXlgsET-miCRdHDQtvtA', 'type' : 'pdf'},
    {'id' : '901', 'nom' : 'Bois massifs structuraux - CTBA', 'url' : 'https://drive.google.com/open?id=1E7WVsvYPeQs87Y6P0h7xSl18WIVM1Bbp', 'type' : 'pdf'},
    {'id' : '901', 'nom' : 'La structure du bois', 'url' : 'https://drive.google.com/open?id=1wrUfi-SfmaXy4CUb_zuYOOBMaqlu_Hse', 'type' : 'pdf'},
    {'id' : '901', 'nom' : 'Le débit des bois', 'url' : 'https://drive.google.com/open?id=18D05WKsHtrdDt8w55sjHohlEkt5WnVP0', 'type' : 'pdf'},
    {'id' : '901', 'nom' : 'Le séchage du bois', 'url' : 'https://drive.google.com/open?id=1qCg8nfmghpuh479qEdT4ROu4St6zSl5x', 'type' : 'pdf'},
    {'id' : '901', 'nom' : 'Le traitement des bois', 'url' : 'https://drive.google.com/open?id=1jRo3OBBfyKneo_6MTN4DvOt5hz3RIMG7', 'type' : 'pdf'},
    {'id' : '901', 'nom' : 'Les altérations du bois', 'url' : 'https://drive.google.com/open?id=1h5lMT4oPHnRk9HLYFF9bu59L_mvvOXgh', 'type' : 'pdf'},
    {'id' : '901', 'nom' : 'Les défauts du bois', 'url' : 'https://drive.google.com/open?id=19SQo2MDxMpI_dUmzChiQALnnOcEtHg75', 'type' : 'pdf'},
    {'id' : '902', 'nom' : 'Le lamellé collé', 'url' : 'https://drive.google.com/open?id=1lYjHX5ac2EAeKdP9i5wU_cgtn6-ZCORP', 'type' : 'pdf'},
    {'id' : '902', 'nom' : 'Le bois lamellé collé - CTBA', 'url' : 'https://drive.google.com/open?id=1qMcxoH_t_ruJRPM9KijmMsxxVvb6UdvM', 'type' : 'pdf'},
    {'id' : '902', 'nom' : 'La fabrication du lamellé collé', 'url' : 'https://www.youtube.com/watch?v=LKvnAZBA_kM', 'type' : 'pdf'},
    {'id' : '904', 'nom' : 'La physique du bois', 'url' : '"https://drive.google.com/open?id=11bbpDvmFomg7WJwejTyO3QQ7SRbXXlK', 'type' : 'pdf'},
    {'id' : '1001', 'nom' : 'Contreventement des ossatures bois', 'url' : 'https://drive.google.com/open?id=1L-Y-CM4nJxspF2zcm_UjzT8xumhFFsvQ', 'type' : 'pdf'},
    {'id' : '1001', 'nom' : 'Stabilité des bâtiments', 'url' : 'https://drive.google.com/open?id=1IQX7ChCYNSHT3y3S6T4KUFSHD1X3IlTu', 'type' : 'pdf'},
    {'id' : '1101', 'nom' : 'Estimation des temps', 'url' : 'https://drive.google.com/file/d/196vrQOlFeQDdGaUbNyFIEuDXTG0iJybW/view?usp=sharing', 'type' : 'pdf'},
    {'id' : '1101', 'nom' : 'Unités de temps', 'url' : 'https://drive.google.com/file/d/1ZMORWmJ3AzSrXI294Rpw4j_h1eORlp3w/view?usp=sharing', 'type' : 'pdf'},
    {'id' : '1101', 'nom' : 'Base de données de temps unitaires', 'url' : 'https://drive.google.com/file/d/1UbO8X2ecNhqbu9BE3-rvwKZRpBC_lmF8/view?usp=sharing', 'type' : 'pdf'},
    {'id' : '1102', 'nom' : 'Le diagramme de Gantt', 'url' : 'https://drive.google.com/open?id=11lXee_17rlcUNFE_OCOiPFiGqzZBialN', 'type' : 'pdf'},
    {'id' : '1102', 'nom' : 'Le lissage de charge', 'url' : 'https://drive.google.com/open?id=1inWn94i1jOA1GDC4s8kk5Op3kUrKhul1', 'type' : 'pdf'},
    {'id' : '1201', 'nom' : 'La ventilation des logements - VMC', 'url' : 'https://drive.google.com/open?id=1ZuOZeuQqCDkhl7D09OtU-H59pubn7jOi', 'type' : 'pdf'},
    {'id' : '1202', 'nom' : 'Notions de base de thermique', 'url' : 'https://drive.google.com/open?id=1d4rhVvOlzjc2ka5uDQRqbwx6zgvHUOHx', 'type' : 'pdf'},
    {'id' : '1202', 'nom' : 'Caractéristiques thermiques des matériaux', 'url' : 'https://drive.google.com/open?id=1Ihw9CaE9iErQUU1IzHmvTkxHBjvfGo0K', 'type' : 'pdf'},
    {'id' : '1202', 'nom' : 'Etude des coefficients de transmission RT2012', 'url' : 'https://drive.google.com/open?id=1iKCT2do5DDbK21Uu2Xwb_f26WP_2V12j', 'type' : 'pdf'},
    {'id' : '1202', 'nom' : 'Th-U fascicule 2-5 Matériaux', 'url' : 'https://drive.google.com/open?id=1JR2mtCtmqOrpNvMqq4b1D_YekIeUtx0x', 'type' : 'pdf'},
    {'id' : '1202', 'nom' : 'Th-U fascicule 3-5 Parois vitrées', 'url' : 'https://drive.google.com/open?id=1c3q7hIcztPXdawg8AQmqnr90scLcapin', 'type' : 'pdf'},
    {'id' : '1202', 'nom' : 'Th-U fascicule 4-5 Parois Opaques', 'url' : 'https://drive.google.com/open?id=1S-S1qwOm5wdUqxfoxRWB_QbZf-N14lIl', 'type' : 'pdf'},
    {'id' : '1203', 'nom' : 'Acoustique - Généralités', 'url' : 'https://drive.google.com/open?id=1fWsz7Q0QwTfIkeI4G7YZD9-TqVGujxsi', 'type' : 'pdf'},
    {'id' : '1203', 'nom' : 'Correction acoustique - Les indices', 'url' : 'https://drive.google.com/open?id=1i4vK7vYODE20ckhPb06lXQ_JPOVfod8-', 'type' : 'pdf'},
    {'id' : '1203', 'nom' : 'Isolation acoustique - Les indices', 'url' : 'https://drive.google.com/open?id=1ajA1EHGft1Br22ciaQ3R07VbJI4hzmA0', 'type' : 'pdf'},
    {'id' : '1301', 'nom' : 'Liste des pièces d\'un DCE', 'url' : 'https://drive.google.com/open?id=145M0yobwgXObDTjmUmnOekOM_mbO6Hxi', 'type' : 'pdf'},
    {'id' : '1301', 'nom' : 'Analyse des pièces d\'un DCE', 'url' : 'https://drive.google.com/open?id=1RpGRiHV9Nu21AievyPNMy3A29SdV5RMl', 'type' : 'pdf'},
    {'id' : '1302', 'nom' : 'Le métré', 'url' : 'https://drive.google.com/open?id=1A1rA7y_FmAVf_wa-bVxGFaLqcLpbrCJ4', 'type' : 'pdf'},
    {'id' : '1302', 'nom' : 'Le sous-détail de prix', 'url' : 'https://drive.google.com/open?id=18sPofKqqR0hxjtnhBkpAzPkH5Uz8MG4d', 'type' : 'pdf'},
    {'id' : '1302', 'nom' : 'Le coût de la main d\'œuvre', 'url' : 'https://drive.google.com/open?id=1SgqRiiwkujQ4tCnhIbK__hfz2S3JqKAJ', 'type' : 'pdf'},
    {'id' : '1302', 'nom' : 'Le calcul du prix de vente (PVHT)', 'url' : 'https://drive.google.com/open?id=1XREPOLkGJMMX2xZW5JSzz39Qgf7hv3La', 'type' : 'pdf'},
    {'id' : '1303', 'nom' : 'Coach "Base de données"', 'url' : 'https://drive.google.com/open?id=1qs__Q_-_VYWl5b9xqr_LGo_53hNLrtGJ', 'type' : 'excel'},
    {'id' : '1303', 'nom' : 'Générateur de prix (prix-construction.info)', 'url' : 'http://www.prix-construction.info/', 'type' : 'html'},
    {'id' : '1401', 'nom' : 'Les règles du dessin technique', 'url' : 'https://drive.google.com/open?id=12-B4o1_-HaTycOsbc8_4Id6pwf_KvF6H', 'type' : 'pdf'},
    {'id' : '1401', 'nom' : 'La cotation', 'url' : 'https://drive.google.com/open?id=15Q-yKmuq9DrrKFhhxXfvNtBfLgfBxkKw', 'type' : 'pdf'},
    {'id' : '1401', 'nom' : 'Coupes et sections', 'url' : 'https://drive.google.com/open?id=11lJRPtCdsA21K_KwlCxAF30ln2TQ4Rsa', 'type' : 'pdf'},
    {'id' : '1402', 'nom' : 'Apprentissage Cadwork 3D - Exercice "le couvert"', 'url' : 'https://drive.google.com/open?id=1bila4dMaRMlcoMfXcb74WiosV14UpJ_6', 'type' : 'pdf'},
    {'id' : '1402', 'nom' : 'Cadwork - Cours d\'initiation', 'url' : 'https://drive.google.com/open?id=1NBgNoCqqM3zkdUfexvotCET1nRr6Vq_6', 'type' : 'pdf'},
    {'id' : '1402', 'nom' : 'Cadwork - Manuel 2D - Version 19', 'url' : 'https://drive.google.com/open?id=1GI1PzsM0GJjg1Xo2NBXsGyBTHCBT4ZRj', 'type' : 'pdf'},
    {'id' : '1402', 'nom' : 'Cadwork - Manuel 3D - Version 16', 'url' : 'https://drive.google.com/open?id=1GlDMIDuyK7vSNl_LKqlmopTWtijZvSrC', 'type' : 'pdf'},
    {'id' : '1402', 'nom' : 'Cadwork - Shortcuts - Version 16 -2D - 3D', 'url' : 'https://drive.google.com/open?id=1LySkPo-P3Wn-4g3t6wk9ZsBm6xJxuNn6', 'type' : 'pdf'},
    {'id' : '1501', 'nom' : 'La Santé-Sécurité au travail', 'url' : 'https://drive.google.com/open?id=1MY2MqxRAENc-3e_Hhs-5ZcseCUcrlAwV', 'type' : 'pdf'},
    {'id' : '1501', 'nom' : 'Principes généraux de prévention', 'url' : 'https://drive.google.com/open?id=1cjmDHY8CXM5eVWZpOxCl87rGPCja-oFa', 'type' : 'pdf'},
    {'id' : '1501', 'nom' : 'Les risques spécifiques à l\'industrie du bois', 'url' : 'https://drive.google.com/open?id=1JALE1g-5l0QB1hIK7StfN2X4v4zsLqka', 'type' : 'pdf'},
    {'id' : '1501', 'nom' : 'Le risque lié aux bruits', 'url' : 'https://drive.google.com/open?id=1UYhErSreVbC5Ym62SQC0n2iJLnkiRaGt', 'type' : 'pdf'},
    {'id' : '1501', 'nom' : 'Equipements de protection individuelle (EPI)', 'url' : 'https://drive.google.com/open?id=1JYniXT8Pr85B4mgqo_4VqEttiWai-z4B', 'type' : 'pdf'},
    {'id' : '1501', 'nom' : 'La signalétique', 'url' : 'https://drive.google.com/open?id=1QP0JRZJIF7ACmtY3xbi-TLKyq1gDs8Uj', 'type' : 'pdf'},
    {'id' : '1502', 'nom' : 'R408 - Echafaudages', 'url' : 'https://drive.google.com/open?id=1kVDfhx0dhZVRONc9CR68uTZtYwJ_M2Wx', 'type' : 'pdf'},
    {'id' : '1502', 'nom' : 'R457 - Echafaudages roulants', 'url' : 'https://drive.google.com/open?id=1UdRqsDGNDpB_AtXNzdUCSVlbl-EAKZRF', 'type' : 'pdf'},
    {'id' : '1503', 'nom' : 'Sécurité machines outils', 'url' : 'https://drive.google.com/open?id=1Nzs9yxqbMBqLWxwHSp13JtCGccC1vKBS', 'type' : 'pdf'},
    {'id' : '203', 'nom' : 'Guide Cmesmat : tout savoir sur les tuiles', 'url' : 'https://www.cmesmat.fr/actualites-conseils/guide-cmesmat-tout-savoir-sur-les-tuiles', 'type' : 'html'},
    {'id' : '203', 'nom' : 'Terréal - Guide de pose', 'url' : 'https://terrealcouverture.com/fileadmin/MediaPIM/Documents/Guide%20de%20pose/Couverture/TERREAL-Guide-de-pose-GMN-PM.pdf', 'type' : 'pdf'},
    {'id' : '203', 'nom' : 'VMZinc - Collecte des eaux pluviales', 'url' : 'http://media.vmzinc.com/pdf/france/GRT%20EEP%202021.pdf', 'type' : 'pdf'},
    {'id' : '203', 'nom' : 'VMZinc - Gouttières en zinc', 'url' : 'https://www.vmzinc.fr/vmzinc-gouttieres.html', 'type' : 'html'},
    {'id' : '203', 'nom' : 'Nicoll - Gouttières et Tubes de descente PVC', 'url' : 'https://www.nicoll.fr/fr/les-solutions-pour-lexterieur/equipements-de-toiture-gouttieres/gouttieres', 'type' : 'html'},
    {'id' : '204', 'nom' : 'Menuiseries extérieures - BBC Bois', 'url' : 'https://bbc-bois.com/construction-bois/les-etapes/menuiseries/', 'type' : 'html'},

]

var listeThemes = [
    {'id' : 101, 'nom' : 'Marchés publics'},
    {'id' : 102, 'nom' : 'Documents administratifs'},
    {'id' : 103, 'nom' : 'Documents divers'},
    {'id' : 201, 'nom' : 'Généralités'},
    {'id' : 202, 'nom' : 'Gros oeuvre'},
    {'id' : 203, 'nom' : 'Couverture et étanchéité'},
    {'id' : 204, 'nom' : 'Menuiseries'},
    {'id' : 301, 'nom' : 'Planification'},
    {'id' : 302, 'nom' : 'Organisation'},
    {'id' : 303, 'nom' : 'Méthodologie de mise en oeuvre'},
    {'id' : 304, 'nom' : 'Chantier à faibles nuisances'},
    {'id' : 401, 'nom' : 'Généralités'},
    {'id' : 402, 'nom' : 'Tracés'},
    {'id' : 403, 'nom' : 'Charpente traditionnelle'},
    {'id' : 404, 'nom' : 'Charpente industrielle'},
    {'id' : 405, 'nom' : 'Le laméllé collé'},
    {'id' : 501, 'nom' : 'Généralités'},
    {'id' : 502, 'nom' : 'Tracés'},
    {'id' : 701, 'nom' : 'Machines outils'},
    {'id' : 702, 'nom' : 'Usinage du bois'},
    {'id' : 703, 'nom' : 'Planification'},
    {'id' : 801, 'nom' : 'Mathématiques'},
    {'id' : 901, 'nom' : 'Le bois massif'},
    {'id' : 902, 'nom' : 'Le lamellé collé'},
    {'id' : 903, 'nom' : 'Les dérivés du bois'},
    {'id' : 904, 'nom' : 'La physique du bois'},
    {'id' : 1001, 'nom' : 'Stabilité des bâtiments'},
    {'id' : 1002, 'nom' : 'Statique - Equilibre des structures'},
    {'id' : 1003, 'nom' : 'Eurocodes'},
    {'id' : 1101, 'nom' : 'Temps'},
    {'id' : 1102, 'nom' : 'Planification'},
    {'id' : 1201, 'nom' : 'Ventilation des logements'},
    {'id' : 1202, 'nom' : 'Thermique et Hygrothermique'},
    {'id' : 1203, 'nom' : 'Acoustique'},
    {'id' : 1301, 'nom' : 'DCE - Dossier de Consultation des Entreprises'},
    {'id' : 1302, 'nom' : 'Décomposition du prix de vente'},
    {'id' : 1303, 'nom' : 'Outils d\'aide au calcul de prix'},
    {'id' : 1401, 'nom' : 'Mise en plan - Généralités'},
    {'id' : 1402, 'nom' : 'DAO - Modélisation 3D'},
    {'id' : 1501, 'nom' : 'Généralités'},
    {'id' : 1502, 'nom' : 'Sécurité sur chantier'},
    {'id' : 1503, 'nom' : 'Sécurité en atelier'},
    {'id' : 1601, 'nom' : 'Généralités Maisons bois'},
    {'id' : 1602, 'nom' : 'Ossature plateforme'},
    {'id' : 1603, 'nom' : 'Plancher bois'},
    {'id' : 1604, 'nom' : 'Bois empilés'}
]

var listeDepartements = [
    {'code' : '14', 'nom' : 'Calvados'},
    {'code' : '26', 'nom' : 'Drôme'},
    {'code' : '27', 'nom' : 'Eure'},
    {'code' : '28', 'nom' : 'Eure-et-Loir'},
    {'code' : '29', 'nom' : 'Finistère'},
    {'code' : '35', 'nom' : 'Ille-et-Vilaine'},
    {'code' : '44', 'nom' : 'Loire-Atlantique'},
    {'code' : '46', 'nom' : 'Lot'},
    {'code' : '50', 'nom' : 'Manche'},
    {'code' : '53', 'nom' : 'Mayenne'},
    {'code' : '59', 'nom' : 'Nord'},
    {'code' : '61', 'nom' : 'Orne'},
    {'code' : '72', 'nom' : 'Sarthe'},
    {'code' : '76', 'nom' : 'Seine-Maritime'},
    {'code' : '80', 'nom' : 'Somme'},
]

var listeEntreprises = [
    {'nom' : 'Alain Queinnec SARL', 'ville' : 'Lampaul-Guimiliau', 'code' : '29400', 'url' : 'bois-et-tradition.fr'},
    {'nom' : 'AMB Alençon Maisons Bois', 'ville' : 'Alençon', 'code' : '61000', 'url' : 'alenconmaisonbois.com'},
    {'nom' : 'ASB Aménagement Structure et Bois', 'ville' : 'Colombelles', 'code' : '14460', 'url' : 'asb14.com'},
    {'nom' : 'Atelier Sagne', 'ville' : 'Guérande', 'code' : '44350', 'url' : 'menuiserie-sagne.com'},
    {'nom' : 'Aublin Biron', 'ville' : 'Saint-Désir', 'code' : '14100', 'url' : 'aublin-biron.fr'},
    {'nom' : 'Bati Bois Normandie', 'ville' : 'Colombelles', 'code' : '14460', 'url' : 'batibois-normandie.com'},
    {'nom' : 'Bati Eco', 'ville' : 'Le Poët-Laval', 'code' : '26160', 'url' : 'cb-bati-eco.fr'},
    {'nom' : 'Belliard', 'ville' : 'Gorron', 'code' : '53120', 'url' : 'belliardconstruction.com'},
    {'nom' : 'Bio-Logi\'K', 'ville' : 'Saint-André-sur-Orne', 'code' : '14310', 'url' : 'normandie-biologik.fr'},
    {'nom' : 'Boulay Constructions', 'ville' : 'Briouze', 'code' : '61220', 'url' : 'constructions-boulay.fr'},
    {'nom' : 'CCMV', 'ville' : 'Touquettes', 'code' : '61550', 'url' : 'ccmv-toiture.com'},
    {'nom' : 'Chanu HD', 'ville' : 'Vire', 'code' : '14500', 'url' : 'chanuhd.com'},
    {'nom' : 'Charpente Favril', 'ville' : 'Vrigny', 'code' : '61570', 'url' : 'charpentefavril.fr'},
    {'nom' : 'Charpente Toiture Changéenne', 'ville' : 'Changé', 'code' : '72560', 'url' : 'charpente-toiture-changeenne.fr'},
    {'nom' : 'Charpenterie des Hauts-de-France', 'ville' : 'Ors', 'code' : '59360', 'url' : '#'},
    {'nom' : 'Concept\'Eure Bois et Construction', 'ville' : 'Clef-Vallée-d\'Eure', 'code' : '27490', 'url' : '#'},
    {'nom' : 'Construction Leboucher SAS', 'ville' : 'Juvigny-le-Tertre', 'code' : '50520', 'url' : 'constructionsleboucher.com'},
    {'nom' : 'Cordhomme et bois', 'ville' : 'Mesnil-Clinchamps', 'code' : '14380', 'url' : 'cordhomme-bois.fr'},
    {'nom' : 'Couillard SARL', 'ville' : 'Cristot', 'code' : '14250', 'url' : 'menuiserie-charpente-couillard.fr'},
    {'nom' : 'CPL Bois', 'ville' : 'Bayeux', 'code' : '14400', 'url' : 'cpl-bois.com'},
    {'nom' : 'CPL Bois', 'ville' : 'Fervaches', 'code' : '50420', 'url' : 'cpl-bois.com'},
    {'nom' : 'Dalmont Menuiserie Charpente', 'ville' : 'Vasteville', 'code' : '50440', 'url' : 'menuiserie-dalmont.fr'},
    {'nom' : 'Defibat', 'ville' : 'Fleury-sur-Orne', 'code' : '14123', 'url' : 'defibat.fr/'},
    {'nom' : 'Delamare Bois', 'ville' : 'Criquebeuf-sur-Seine', 'code' : '27340', 'url' : 'delamare-bois.com'},
    {'nom' : 'Derouet Longuet sarl', 'ville' : 'Saint-Désir', 'code' : '14100', 'url' : 'derouet-longuet.business.site'},
    {'nom' : 'Deschamps SA', 'ville' : 'Saint-Denis-de-Gastines', 'code' : '53500', 'url' : 'deschamps-sa.com'},
    {'nom' : 'Desperrois Charpente', 'ville' : 'Pont-l\'Evêque', 'code' : '14130', 'url' : 'desperrois-charpentes.com/fr'},
    {'nom' : 'DJSL Bois', 'ville' : 'Bacqueville-en-Caux', 'code' : '76730', 'url' : 'djsl-bois.fr'},
    {'nom' : 'DRB bois', 'ville' : 'Saint-Berthevin', 'code' : '53940', 'url' : 'drb-bois.com'},
    {'nom' : 'Eiffage Construction Savare', 'ville' : 'Moult-Chicheboville', 'code' : '14456', 'url' : 'savare-eiffage.fr'},
    {'nom' : 'Entreprise Hurault', 'ville' : 'Châteaugiron', 'code' : '35410', 'url' : 'extension-bardage-bois-rennes.fr'},
    {'nom' : 'Esnault Charpente', 'ville' : 'Amfreville', 'code' : '14860', 'url' : 'esnault-charpente-menuiserie-ossature-bois.fr'},
    {'nom' : 'Espace Toiture', 'ville' : 'Quibou', 'code' : '50750', 'url' : '#'},
    {'nom' : 'Ets Mallet', 'ville' : 'May-sur-Orne', 'code' : '14320', 'url' : 'ets-mallet.com'},
    {'nom' : 'Evobois', 'ville' : 'Mercuès', 'code' : '46090', 'url' : 'evobois.com'},
    {'nom' : 'Farcy Menuiserie', 'ville' : 'Bretteville-sur-Odon', 'code' : '14680', 'url' : 'menuiseriefarcy-14.fr'},
    {'nom' : 'France Yoann Charpente', 'ville' : 'Moult-Chicheboville', 'code' : '14456', 'url' : 'Facebook/France-yoann-charpente'},
    {'nom' : 'Habitat Bois Création', 'ville' : 'Bourgbarré', 'code' : '35235', 'url' : 'habitatboiscreation.fr'},
    {'nom' : 'HMG Horthense Menuiserie', 'ville' : 'Andrieu', 'code' : '14250', 'url' : 'menuiserie-horthense.fr'},
    {'nom' : 'Ibatec-bois SAS', 'ville' : 'Caen', 'code' : '14000', 'url' : 'ibatec-bois.fr'},
    {'nom' : 'James SA', 'ville' : 'Brécey', 'code' : '50370', 'url' : 'james.fr'},
    {'nom' : 'Joël Mariette', 'ville' : 'Carpiquet', 'code' : '14650', 'url' : 'jm14.com'},
    {'nom' : 'Jouanne Lefevre', 'ville' : 'Saint-Clair-sur-Elle', 'code' : '50680', 'url' : 'jouanne-lefevre.fr'},
    {'nom' : 'La tiny house', 'ville' : 'Poilley-sur-le-Homme', 'code' : '50220', 'url' : 'latinyhouse.com'},
    {'nom' : 'Le Bois à l\'Oeuvre', 'ville' : 'Rouen', 'code' : '76000', 'url' : 'leboisaloeuvre.com'},
    {'nom' : 'Lemaitre Menuiserie', 'ville' : 'Saint-Germain-sur-Ay', 'code' : '50430', 'url' : 'lemaitre-menuiserie.fr'},
    {'nom' : 'Lemaux SAS', 'ville' : 'Bricquebosq', 'code' : '50340', 'url' : 'saslemaux.fr'},
    {'nom' : 'Leprêtre SARL', 'ville' : 'Heugueville-sur-Sienne', 'code' : '50200', 'url' : 'manche-menuiserie-lepretre.com'},
    {'nom' : 'Les Airelles', 'ville' : 'Gaillefontaine', 'code' : '76870', 'url' : 'lesairelles.fr'},
    {'nom' : 'Les Métiers du Bois', 'ville' : 'Bretteville-sur-Odon', 'code' : '14760', 'url' : 'lesmetiersdubois.com'},
    {'nom' : 'Les Métiers du Bois', 'ville' : 'Bretteville-sur-Odon', 'code' : '14760', 'url' : 'lesmetiersdubois.com'},
    {'nom' : 'Loret Charpente', 'ville' : 'Briouze', 'code' : '61220', 'url' : 'charpente-loret.com'},
    {'nom' : 'Madelaine Charpente', 'ville' : 'Dozulé', 'code' : '14430', 'url' : 'charpente-madelaine.fr'},
    {'nom' : 'Méga Charpente', 'ville' : 'Clévilliers', 'code' : '28300', 'url' : 'megacharpente.fr'},
    {'nom' : 'MEL Meuble - Ebénisterie - Leblond', 'ville' : 'Sentelie', 'code' : '80160', 'url' : '#'},
    {'nom' : 'Menuiserie Buhour-Leconte', 'ville' : 'Louvigny', 'code' : '14111', 'url' : 'charpente-maison-bois-caen.fr'},
    {'nom' : 'Menuiserie Claude Revel', 'ville' : 'Martinvast', 'code' : '50690', 'url' : 'menuiserie-revel.com'},
    {'nom' : 'Micard SAS', 'ville' : 'Urou et Crennes', 'code' : '61200', 'url' : 'sasmicard.fr'},
    {'nom' : 'Mottier sarl', 'ville' : 'Ducey', 'code' : '50220', 'url' : '#'},
    {'nom' : 'Pascobois', 'ville' : 'Saint-Julien-le-Faucon', 'code' : '14140', 'url' : 'pascobois.fr'},
    {'nom' : 'Pesqueux Charpente', 'ville' : 'Sainte-Marie-des-Champs', 'code' : '76190', 'url' : 'pesqueux-charpente.fr'},
    {'nom' : 'Philippe SARL', 'ville' : 'Nay', 'code' : '50190', 'url' : 'maison-ossature-bois-50.com'},
    {'nom' : 'Pouchin Duval SARL', 'ville' : 'Livarot', 'code' : '14140', 'url' : 'pouchin-duval.e-toiture.com'},
    {'nom' : 'Poulingue', 'ville' : 'Beuzeville', 'code' : '27210', 'url' : 'poulingue.fr'},
    {'nom' : 'SAS EMI', 'ville' : 'Caen', 'code' : '14000', 'url' : '#'},
    {'nom' : 'Sosson', 'ville' : 'Bretteville-sur-Laize', 'code' : '14680', 'url' : 'sosson-maison-bois.net'},
    {'nom' : 'Unibois', 'ville' : 'Auzouville-sur-Ry', 'code' : '76116', 'url' : '#'},
    {'nom' : 'Up Structure', 'ville' : 'Verson', 'code' : '14790', 'url' : 'upstructures-caen.fr'},
    {'nom' : 'Véofi Construction', 'ville' : 'Hondouville', 'code' : '27400', 'url' : 'veofi.fr'},
    {'nom' : 'Vivabois SARL', 'ville' : 'Ducey', 'code' : '50220', 'url' : 'vivabois50.com'},
]

// fonction pour le tri des données
function SortArray(x, y){
    if (x.nom < y.nom) {return -1;}
    if (x.nom > y.nom) {return 1;}
    return 0;
}

// fonction de tri des données
function creationListe(categorie){
    var table = new Array();
    for(var i=0; i<base.length; i++){    
        if(Math.round(base[i].id/100) == categorie){
            table.push(base[i]);
        }
    }
    var tableTriee = table.sort(SortArray);
    return tableTriee;
}

// création de la page
function creationPage(categorie){
    document.getElementById("pagePrincipale").innerHTML = "";
    for(var i=0; i<listeThemes.length; i++){
        if(Math.round(listeThemes[i].id/100) == categorie){
            var element = document.createElement("div");
            element.id = listeThemes[i].id;
            document.getElementById("pagePrincipale").appendChild(element);

            element = document.createElement("div");
            element.id = "titre"+listeThemes[i].id;
            element.className = "titreThemeCours";      
            document.getElementById(listeThemes[i].id).appendChild(element);
            document.getElementById("titre"+listeThemes[i].id).innerHTML += listeThemes[i].nom;
        }
    }
    var tableTriee = creationListe(categorie);
    for(i=0; i<tableTriee.length; i++){
        element = document.createElement("div");
        element.id = "doc"+tableTriee[i].id+i;
        element.className = "document";
        document.getElementById(tableTriee[i].id).appendChild(element);
        document.getElementById("doc"+tableTriee[i].id+i).innerHTML = '<a href="'+tableTriee[i].url+'" target="blank"><img src="images/'+tableTriee[i].type+'.png" class="icone">'+tableTriee[i].nom+'</a>';
    }
}


function creerListeEntreprises(){
    for(var i=0; i<listeDepartements.length; i++){
        var element = document.createElement("div");
        element.id = listeDepartements[i].code;
        document.getElementById("entreprises").appendChild(element);
        element = document.createElement("div");
        element.className = "styleDepartement";
        element.textContent = listeDepartements[i].code+" - "+listeDepartements[i].nom;
        document.getElementById(listeDepartements[i].code).appendChild(element);
    }

    for(i=0; i<listeEntreprises.length; i++){
        element = document.createElement("div");
        element.id = "entreprise"+i;
        element.className = "styleEntreprise";
        document.getElementById(listeEntreprises[i].code.substring(0,2)).appendChild(element);
        document.getElementById("entreprise"+i).innerHTML = '<a target="blank" href ="http://www.'+listeEntreprises[i].url+'">'+listeEntreprises[i].nom+' - '+listeEntreprises[i].ville+' ('+listeEntreprises[i].code+')</a>';
    }
}