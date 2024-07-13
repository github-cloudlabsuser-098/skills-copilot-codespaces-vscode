# Login to Azure
Connect-AzAccount

# Set your subscription
Set-AzContext -SubscriptionId 'your-subscription-id'

# Create a resource group
New-AzResourceGroup -Name 'myResourceGroup' -Location 'West Europe'

# Create a storage account
New-AzStorageAccount -ResourceGroupName 'myResourceGroup' -Name 'mystorageaccount' -Location 'West Europe' -SkuName Standard_LRS