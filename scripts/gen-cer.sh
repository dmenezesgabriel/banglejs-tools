#!/bin/bash

#Required
domain=localhost.dev
commonname=$domain

#Change to your company details
country=BR
state=Nottingham
locality=Nottinghamshire
organization=localhost.dev
organizationalunit=IT
email=localhost.dev@localhost.dev

#Optional
password=dummypassword

echo "Generating key request"

# Generate a key
openssl genrsa -passout pass:$password -out key.pem

# Create the request
echo "Creating CSR"
openssl req -new -key key.pem -out csr.pem -passin pass:$password \
    -subj "/C=$country/ST=$state/L=$locality/O=$organization/OU=$organizationalunit/CN=$commonname/emailAddress=$email"

# Create cert.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

# Remove csr
rm csr.pem

echo "---------------------------"
echo "-----Below is your Cert----"
echo "---------------------------"
echo
cat cert.pem

echo
echo "---------------------------"
echo "-----Below is your Key-----"
echo "---------------------------"
echo
cat key.pem