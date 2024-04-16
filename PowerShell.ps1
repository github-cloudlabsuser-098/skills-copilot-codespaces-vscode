# Import the Active Directory module
Import-Module ActiveDirectory

# Get all active users
Get-ADUser -Filter 'Enabled -eq $True' | Format-Table Name, UserPrincipalName, Enabled