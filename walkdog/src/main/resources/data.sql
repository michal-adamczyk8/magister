INSERT INTO shelter_address (id, city, street_name, house_number, zip_code, created_by, created_at)
VALUES (sequence_shelter_address_id.nextval, 'Warszawa', 'ul. Paluch', '2', '01-910', 'admin', CURRENT_DATE);


INSERT INTO shelter_address (id, city, street_name, house_number, zip_code, created_by, created_at)
VALUES (sequence_shelter_address_id.nextval, 'Kielce', 'ul. Sciegiennego', '203', '25-098', 'admin', CURRENT_DATE);

INSERT INTO shelter(id,
                    name,
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
VALUES (sequence_shelter_id.nextval,
        'Schronisko Na Paluchu',
        '5222584702',
        '017189145',
        'info@napaluchu.waw.pl',
        '22 868-06-34',
        'https://napaluchu.waw.pl/wp-content/themes/paluch/images/logo-1.png',
        'Schronisko dla bezdomych zwirząt',
        1,
        'https://napaluchu.waw.pl/',
        'ACTIVE',
        'admin',
        CURRENT_DATE);

INSERT INTO shelter(id,
                    name,
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
VALUES (sequence_shelter_id.nextval,
        'Schronisko w Dyminach',
        '5222584702',
        '017189145',
        'schronisko.dyminy@wp.pl',
        '41 361 67 24',
        'http://www.puszatek.pl/img/shelter/rbhO9igp6k2efHvDibhDZVldiq9qTCE-.png',
        'Schronisko dla bezdomych zwierząt',
        2,
        'https://schronisko-dyminy.pl/',
        'ACTIVE',
        'admin',
        CURRENT_DATE);



INSERT INTO pet (
id, type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
  sequence_pet_id.nextval, 'DOG', '50 Cent', 'M', 'Maltańczyk', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 1, 'READY_TO_ADOPTION', 'admin', CURRENT_DATE
);

INSERT INTO pet (
id, type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
  sequence_pet_id.nextval, 'DOG', 'Paulinka', 'F', 'Bokser', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 1, 'READY_TO_ADOPTION', 'admin', CURRENT_DATE
);

INSERT INTO pet (
id, type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
  sequence_pet_id.nextval, 'DOG', '50 Cent', 'M', 'Maltańczyk', 2021, 4, 1.0, CURRENT_DATE, 'Malusieńki maltanczyk czeka na dobrego właściciela', 'W lesie', 2, 'READY_TO_ADOPTION', 'admin', CURRENT_DATE
);

INSERT INTO pet (
id, type, name, sex, race_type, birth_year, birth_month, weight, admittance_date, description, found_place, shelter_id, status, created_by, created_at
)
VALUES (
  sequence_pet_id.nextval, 'DOG', 'Paulinka', 'F', 'Bokser', 2020, 12, 18.1, CURRENT_DATE, 'Bardzo żwywiołowy pies szuka właściela', 'Przy drodze', 2, 'READY_TO_ADOPTION', 'admin', CURRENT_DATE
);






