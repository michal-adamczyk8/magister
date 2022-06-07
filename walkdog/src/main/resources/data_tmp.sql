INSERT INTO shelter_address (city, street_name, house_number, zip_code, created_by, created_at)
VALUES ('Warszawa', 'ul. Paluch', '2', '01-910', 'admin', CURRENT_DATE);


INSERT INTO shelter_address (city, street_name, house_number, zip_code, created_by, created_at)
VALUES ('Kielce', 'ul. Sciegiennego', '203', '25-098', 'admin', CURRENT_DATE);

INSERT INTO shelter(name,
                    nip,
                    regon,
                    email,
                    phone_number,
                    image_path,
                    description,
                    address_id,
                    website_url,
                    status,
                    created_by,
                    created_at)
VALUES ('Schronisko Na Paluchu',
        '5222584702',
        '017189145',
        'info@napaluchu.waw.pl',
        '22 868-06-34',
        'https://napaluchu.waw.pl/wp-content/themes/paluch/images/logo-1.png',
        'Schronisko dla bezdomych zwirząt',
        1,
        'https://napaluchu.waw.pl/',
        'Aktywne',
        'admin',
        CURRENT_DATE);

INSERT INTO shelter(name,
                    nip,
                    regon,
                    email,
                    phone_number,
                    image_path,
                    description,
                    address_id,
                    website_url,
                    status,
                    created_by,
                    created_at)
VALUES ('Schronisko w Dyminach',
        '5222584702',
        '017189145',
        'schronisko.dyminy@wp.pl',
        '41 361 67 24',
        'http://www.puszatek.pl/img/shelter/rbhO9igp6k2efHvDibhDZVldiq9qTCE-.png',
        'Schronisko dla bezdomych zwierząt',
        2,
        'https://schronisko-dyminy.pl/',
        'Aktywne',
        'admin',
        CURRENT_DATE);



INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Toffik', 'Pies', 'Maltańczyk', 2020, 2, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Teddy', 'Pies', 'Bokser', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Roki', 'Pies', 'Owczarek niemiecki', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Alex', 'Pies', 'Kundelek', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Fafik', 'Pies', 'Mieszaniec husky', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Maks', 'Pies', 'Jamnik', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Misza', 'Pies', 'Bokser', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Leo', 'Pies', 'Wyżeł', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Max', 'Pies', 'Kundelek', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Fado', 'Pies', 'Mieszanie juck russel terrier', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Riko', 'Pies', 'Labrador', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Hektor', 'Pies', 'Owczarek', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Laki', 'Pies', 'Setter', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Puszek', 'Pies', 'Amstaff', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Pimpek', 'Pies', 'Sznaucer', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Kajtek', 'Pies', 'Terier', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Fuks', 'Pies', 'Owczarek kaukaski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Diego', 'Pies', 'Owcarek podhalański', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Harry', 'Pies', 'Labrador', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Rico', 'Pies', 'Sznaucer miniaturowy', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Hades', 'Pies', 'Mieszaniec', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Hugo', 'Pies', 'Shih tzu', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Emi', 'Pies', 'Jamnik', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Charlie', 'Pies', 'Husky', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Biszkopt', 'Pies', 'Bernardyn', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Shadow', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Ares', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Marley', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Misiek', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Aleks', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Agent', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Papi', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Niko', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Maniek', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Bruno', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Cezar', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Rafi', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Bastek', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Hachi', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Kuba', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Melman', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Lucjan', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Docent', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Mniszek', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Docent', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Nestor', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Mikrus', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Leon', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Tołdi', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Szajba', 'Kot', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Lucky', 'Kot', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Luna', 'Suczka', 'Husky', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Tina', 'Suczka', 'Labrador', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Diana', 'Suczka', 'Terier', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Sonia', 'Suczka', 'Sznaucer', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Elza', 'Suczka', 'Mieszaniec', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Sara', 'Suczka', 'Owczrek niemiecki', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Tosia', 'Suczka', 'Husky', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Lola', 'Suczka', 'Amstaff', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Fibi', 'Suczka', 'Bokser', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Daisy', 'Suczka', 'Bernardyn', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Maja', 'Suczka', 'Pitbull', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Megi', 'Suczka', 'Wyżeł', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Kira', 'Suczka', 'Sznaucer miniaturowy', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Nela', 'Suczka', 'Owczarek kaukaski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Mika', 'Suczka', 'Shih tzu', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Leya', 'Suczka', 'Cocker spaniel', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Milka', 'Suczka', 'Amstaff', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Fiona', 'Suczka', 'Jamnik', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Roxi', 'Suczka', 'Mieszaniec', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Luka', 'Suczka', 'Mieszaniec', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Muffinka', 'Suczka', 'Mieszaniec', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Ira', 'Suczka', 'Mieszaniec', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Bajka', 'Suczka', 'Labrador', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Figa', 'Suczka', 'Sznaucer', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Gaja', 'Suczka', 'Bernardyn', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Pies', 'Sisi', 'Suczka', 'Mieszaniec', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Suzi', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Aza', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Saba', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Nuka', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Mila', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Kesia', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Ciri', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Mery', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Wiga', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Koka', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Fuzja', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Kaja', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Holly', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Salma', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Macy', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Channel', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Rumba', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Kala', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Wiga', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Mia', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Coffee', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Mela', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Lila', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Chelsea', 'Kocica', 'Europejski', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO pet (
type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
   'Kot', 'Shila', 'Kocica', 'Europejski', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'Gotowy do adopcji', 'admin', CURRENT_DATE
);

INSERT INTO email_template(email_template_type, subject, text) values (
  'Dodanie nowego użytkownika', 'Rejestracja w serwisie walk.doggg', 'Dzień dobry %s, <br> <p>Zostałeś/aś zarejestrowany w serwisie WalkDog. Twoje tymczasowe hasło to: %s</p> <br><p>Pozdrawiamy, <br>załoga WalkDog</p>'
);

INSERT INTO email_template(email_template_type, subject, text) values (
  'Rejestracja nowego użytkownika', 'Rejestracja w serwisie walk.doggg', 'Dzień dobry %s, <br> <p>Zostałeś/aś zarejestrowany w serwisie WalkDog.</p> <br><p>Pozdrawiamy, <br>załoga WalkDog</p>'
);

INSERT INTO email_template(email_template_type, subject, text) values (
  'Potwierdzenie spotkania', 'Potwierdzenie spotkania', 'Dzień dobry %s, <br> <p>Z radością informujemy, że Twoje spotkanie ze zwierzakiem zostało zaakceptowane.</p> <br><p>Pozdrawiamy, <br>załoga WalkDog</p>'
);

INSERT INTO email_template(email_template_type, subject, text) values (
  'Anulowanie spotkania', 'Anulowanie spotkania', 'Dzień dobry %s, <br> <p>Przykro nam poinformowac, że administrator schroniska anulował Twoje spotkanie.</p> <br><p>Pozdrawiamy, <br>załoga WalkDog</p>'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Stanley', 'Hudson', 1, 'admin', now(), 'Aktywny', '789123456', 's.hudson@hotmail.com', 'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Campaign/landingpages/library/theoffice/characterbios/office-character-stanley-min.png/_jcr_content/renditions/original?downsize=1200:*&output-quality=70'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Phyllis', 'Vance', 1, 'admin', now(), 'Aktywny', '891812674', 'p.vance@hotmail.com', 'https://m.media-amazon.com/images/M/MV5BMjA4NTM3NjUwMV5BMl5BanBnXkFtZTcwMDMyMTk3Mw@@._V1_.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Meredith', 'Palmer', 1, 'admin', now(), 'Aktywny', '875241122', 'm.palmer@hotmail.com', 'https://www.looper.com/img/gallery/whatever-happened-to-meredith-from-the-office/intro-1526005235.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Toby', 'Flenderson', 1, 'admin', now(), 'Aktywny','518237128', 't.flenderson@hotmail.com', 'https://www.looper.com/img/gallery/the-most-underrated-toby-scene-in-the-office-according-to-fans/l-intro-1625839502.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Creed', 'Bratton', 1, 'admin', now(), 'Aktywny', '507778781', 'c.bartton@hotmail.com', 'https://m.media-amazon.com/images/M/MV5BMjQzNDMwMjQ5OF5BMl5BanBnXkFtZTgwMTc5MTY1OTE@._V1_.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Darryl', 'Philbin', 1, 'admin', now(), 'Aktywny', '678567509', 'd.philbin@hotmail.com', 'https://tv-fanatic-res.cloudinary.com/iu/s--sv1ehwjq--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1371070490/darryl-philbin.png'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Roy', 'Anderson', 1, 'admin', now(), 'Aktywny','878123453', 'r.anderson@hotmail.com', 'https://preview.redd.it/lgzl6r5ds5g11.jpg?auto=webp&s=f87b52fb96a41136e7926fa1ce91ce15951a3a3c'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Gabe', 'Lewis', 1, 'admin', now(), 'Aktywny', '770989134', 'g.lewis@hotmail.com', 'https://cdn3.whatculture.com/images/2020/05/3a4ccfb6b8b92106-600x338.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Todd', 'Packer', 1, 'admin', now(), 'Aktywny', '606732122', 't.packer@hotmail.com', 'https://static.wikia.nocookie.net/villains/images/9/9a/ToddPackerPicFace.png/revision/latest?cb=20190504233033'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Ed', 'Truck', 1, 'admin', now(), 'Aktywny', '514439008', 'e.truck@hotmail.com', 'https://static.wikia.nocookie.net/theoffice/images/3/32/Edtruck.jpg/revision/latest/top-crop/width/360/height/360?cb=20060703233048'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'David', 'Wallace', 2, 'admin', now(), 'Aktywny', '607823990', 'd.wallace@hotmail.com', 'https://static.wikia.nocookie.net/theoffice/images/7/78/Screen_Shot_2017-01-28_at_9.58.11_PM.png/revision/latest?cb=20170129035841'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Dwight', 'Schrute', 2, 'admin', now(), 'Aktywny', '509887456', 'd.shrute@gmail.com', 'https://www.cheatsheet.com/wp-content/uploads/2021/02/Dwight-Schrute-The-Office.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Marcelina', 'Ogórek', 2, 'admin', now(), 'Aktywny', '540989998', 'm.ogorek@hotmail.com', 'https://media-exp1.licdn.com/dms/image/C4E03AQGcEX4WPztCXQ/profile-displayphoto-shrink_100_100/0/1628165411702?e=1648684800&v=beta&t=_IFQ7ECmfJ9b3FMdrRVx50y_r6fgt41e95RN5_1JVOc'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Kevin', 'Malone', 2, 'admin', now(), 'Aktywny', '705670987', 'k.malone@hotmail.com', 'https://blenderartists.org/uploads/default/original/4X/3/6/3/3638128903092bc831f1513036a7f4288754157d.jpeg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Andrew', 'Bernard', 2, 'admin', now(), 'Aktywny', '501432445', 'a.bernard@hotmail.com', 'https://static2.srcdn.com/wordpress/wp-content/uploads/2018/04/Ed-Helms-as-Andy-Bernard-on-The-Office.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Kelly', 'Kapoor', 2, 'admin', now(), 'Aktywny', '609996543', 'k.kapoor@hotmail.com', 'https://upload.wikimedia.org/wikipedia/en/6/69/Kelly_Kapoor.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Oscar', 'Martinez', 2, 'admin', now(), 'Aktywny', '544343444','o.martinez@hotmail.com', 'https://images.hobbydatabase.com/processed_uploads/subject_photo/subject_photo/image/63429/1602522980-12464-3984/OSCARPIC_large.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Angela', 'Martin', 2, 'admin', now(), 'Aktywny', '700909890', 'a.martin@hotmail.com', 'https://i0.wp.com/devsari.com/wp-content/uploads/2021/04/c8cbd3e2a5d507794abd7b8dff59a8fd.jpg?fit=512%2C288&ssl=1'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Jim', 'Halpert', 2, 'admin', now(), 'Aktywny', '517667873', 'j.halpert@hotmail.com', 'https://www.looper.com/img/gallery/heres-how-john-krasinski-really-feels-about-the-offices-jim-halpert/john-krasinski-occasionally-found-jim-annoying-1625883240.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Micheal', 'Scott', 2, 'admin', now(), 'Aktywny', '509983456', 'm.scott@hotmail.com', 'http://ocdn.eu/images/pulscms/NzU7MDA_/41f6a967ba865d25886a615d2a0fe254.jpg'
);
insert into taker (first_name, last_name, shelter_id, created_by, created_at, status, phone_number, email, image_url) values (
	'Robert', 'California', 2, 'admin', now(), 'Aktywny', '513098789', 'r.california@hotmail.com', 'https://www.looper.com/img/gallery/the-truth-about-robert-california-from-the-office/intro-1583335474.jpg'
);


do
$$
declare
    f record;
begin
    for f in select *
           from pet p order by p.id
    loop
		insert into taker_pets (pets_id, takers_id)
			select p.id as pet_id, t.id as taker_id from pet p left join taker t on p.shelter_id = t.shelter_id  where p.id = f.id
		limit 3 offset (select floor(random() * 7));
   end loop;
end;
$$;

alter table pet add column image_url varchar(1000);






