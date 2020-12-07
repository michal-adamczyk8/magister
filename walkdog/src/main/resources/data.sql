INSERT INTO shelter_address (shelter_address_id, city, street_name, house_number, zip_code, created_by, created_at)
VALUES (sequence_shelter_address_id.nextval, 'Warszawa', 'ul. Paluch', '2', '01-910', 'admin', CURRENT_DATE);


INSERT INTO shelter_address (shelter_address_id, city, street_name, house_number, zip_code, created_by, created_at)
VALUES (sequence_shelter_address_id.nextval, 'Kielce', 'ul. Sciegiennego', '203', '25-098', 'admin', CURRENT_DATE);

INSERT INTO shelter(shelter_id, shelter_name, nip, regon, email, phone_number, image_path, description, address_id, created_by,
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
        'admin',
        CURRENT_DATE);

INSERT INTO shelter(shelter_id, shelter_name, nip, regon, email, phone_number, image_path, description, address_id, created_by,
                    created_at)
VALUES (sequence_shelter_id.nextval,
        'Schronisko w Dyminach',
        '5222584702',
        '017189145',
        'schronisko.dyminy@wp.pl',
        '41 361 67 24',
        'https://lh3.googleusercontent.com/proxy/ertnpyKhUcfTRAKPBc0I6-gu9bBo7oOD5zNj3KwLTND0FvJWlxTFnvJGn-ckCohKUEZGcIbl10wBErJ1Nkx9ebjuZty6nz1XMcuXRlhfUWdGOseud5OxMZktE9PGnNU',
        'Schronisko dla bezdomych zwierząt',
        2,
        'admin',
        CURRENT_DATE);






