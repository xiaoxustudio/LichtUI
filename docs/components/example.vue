<template>
	<LiRow direction="column">
		<LiCol>
			<div style="background-color: #eee; padding: 5px 2px">
				<b>图标组件</b>
			</div>
		</LiCol>
		<LiCol>
			<LiIcon><AddCircle /></LiIcon>
			<LiIcon :size="25"> 图 </LiIcon>
			<LiIcon color="blue" :size="45"> 图 </LiIcon>
			<LiIcon color="yellow" :size="65"> 图</LiIcon>
		</LiCol>
		<LiCol>
			<div style="background-color: #eee; padding: 5px 2px">
				<b>按钮组件</b>
			</div>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton>测试</LiButton>
			<LiButton type="primary">主要</LiButton>
			<LiButton type="success">成功</LiButton>
			<LiButton type="danger">危险</LiButton>
			<LiButton type="warning">警告</LiButton>
			<LiButton type="info">信息</LiButton>
			<LiButton disabled>失效</LiButton>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton plain>测试</LiButton>
			<LiButton type="primary" plain>主要</LiButton>
			<LiButton type="success" plain>成功</LiButton>
			<LiButton type="danger" plain>危险</LiButton>
			<LiButton type="warning" plain>警告</LiButton>
			<LiButton type="info" plain>信息</LiButton>
			<LiButton disabled plain>失效</LiButton>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton round>测试</LiButton>
			<LiButton type="primary" round>主要</LiButton>
			<LiButton type="success" round>成功</LiButton>
			<LiButton type="danger" round>危险</LiButton>
			<LiButton type="warning" round>警告</LiButton>
			<LiButton type="info" round>信息</LiButton>
			<LiButton disabled round>失效</LiButton>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton round disabled>测试</LiButton>
			<LiButton type="primary" disabled round>主要</LiButton>
			<LiButton type="success" disabled round>成功</LiButton>
			<LiButton type="danger" disabled round>危险</LiButton>
			<LiButton type="warning" disabled round>警告</LiButton>
			<LiButton type="info" disabled round>信息</LiButton>
			<LiButton disabled round>失效</LiButton>
		</LiCol>
		<LiCol class="p-1" style="display: flex; gap: 5px">
			<LiButton plain disabled>测试</LiButton>
			<LiButton type="primary" plain disabled>主要</LiButton>
			<LiButton type="success" plain disabled>成功</LiButton>
			<LiButton type="danger" plain disabled>危险</LiButton>
			<LiButton type="warning" plain disabled>警告</LiButton>
			<LiButton type="info" plain disabled>信息</LiButton>
			<LiButton plain disabled>失效</LiButton>
		</LiCol>
	</LiRow>
</template>
